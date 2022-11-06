<template>
  <div class="so-example">
    <h3 class="so-title">
      <FontAwesomeIcon class="so-logo" :icon="['fab', 'stack-overflow']" />
      Stack Overflow Questions with <span class="tag">prefect</span> tag
    </h3>
    <div class="filters">
      <h4>Filter by additional Tags:</h4>
      <div class="tags">
        <template v-for="tag in tags" :key="tag.name">
          <span class="tag" :class="tag.active && 'active'" @click="toggleTag(tag.name)">{{ tag.name }}</span>
        </template>
      </div>
    </div>
    <h1 v-if="state.loading">
      loading...
    </h1>
    <table class="questions-table">
      <tr>
        <th>User</th>
        <th>Rep</th>
        <th>Title</th>
        <th>Views</th>
        <th>Answers</th>
        <th>Score</th>
        <th>Created</th>
        <th>Active</th>
      </tr>
      <template v-for="question in questions" :key="question.question_id">
        <tr @click="onClickTableRow(question.link)">
          <td>
            <div class="owner">
              <img :src="question.owner.profile_image">
              <!-- TODO: onerror show placeholder image?  -->
              <div v-html="question.owner.display_name" />
            </div>
          </td>
          <td>{{ question.owner.reputation }}</td>
          <td class="title">
            <div v-html="question.title" />
          </td>
          <td>{{ question.view_count }}</td>
          <td>
            {{ question.answer_count }}
            <span v-if="question.accepted_answer_id">✅</span>
          </td>
          <td>{{ question.score }}</td>
          <td>{{ moment(question.creation_date * 1000).fromNow() }}</td>
          <td>{{ moment(question.last_activity_date * 1000).fromNow() }}</td>
        </tr>
      </template>
    </table>
  </div>
</template>

<script lang="ts" setup>
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
  import moment from 'moment'
  import { onMounted, reactive } from 'vue'
  import { LocationQuery, onBeforeRouteUpdate } from 'vue-router'
  import router from '@/router'

  type Question = {
    accepted_answer_id?: number,
    answer_count: number,
    content_license: string,
    creation_date: number,
    is_answered: boolean,
    last_activity_date: number,
    last_edit_date?: number,
    link: string,
    owner: Owner,
    question_id: number,
    score: number,
    tags: string[],
    title: string,
    view_count: number,
  }

  type Owner = {
    accept_rate?: number,
    account_id: number,
    display_name: string,
    link: string,
    profile_image: string,
    reputation: number,
    user_id: number,
    user_type: string,
  }

  type Tag = {
    name: string,
    questionIds: string[],
    active?: boolean,
  }

  const questions: Question[] = reactive([])
  const tags: Tag[] = reactive([])
  let state = reactive({ loading: true })

  onMounted(async () => {
    await loadQuestions(router.currentRoute.value.query)
  })

  onBeforeRouteUpdate(async to => {
    await loadQuestions(to.query)
  })

  const loadQuestions = async (query: LocationQuery) => {
    // TODO: Other filters, sort, pagination (lazyload?)

    const activeTags = query.tags ? (query.tags as string).split(';') : []
    activeTags.unshift('prefect')

    const apiParams = {
      pagesize: String(60),
      order: 'desc',
      sort: 'activity',
      site: 'stackoverflow',
      tagged: activeTags.join(';'),
    }
    const URLParams = new URLSearchParams(apiParams).toString()
    const url = `https://api.stackexchange.com/2.3/questions?${URLParams}`

    let data
    const cachedURL = sessionStorage.getItem(url)
    if (cachedURL) {
      const cache = JSON.parse(cachedURL)
      const cacheAgeInSeconds = Math.floor((new Date().getTime() - cache.time) / 1000)
      // Aggressive caching for local development
      if (cacheAgeInSeconds < 60 * 60 * 12) {
        console.log(`Using cached data! (${moment.duration(cacheAgeInSeconds, 'seconds').humanize()} old) ${url}`)
        data = cache.data
      }
    }
    if (!data) {
      const response = await fetch(url)
      data = await response.json()
      // NB: https://api.stackexchange.com/docs/throttle
      console.log(`API calls remaining: ${data.quota_remaining}`)
      sessionStorage.setItem(url, JSON.stringify({ data, time: new Date().getTime() }))
    }

    state.loading = false
    questions.splice(0, questions.length) // TODO - skip when loading pages > 1
    questions.push(...data.items)

    // Cache all unique questions across filters & pagination to aggregate tags, sortable by prominence.
    // NB: When filtering by tags prominence could become skewed towards active tags? Feature or bug?
    const QUESTIONS = 'questions'
    const cachedQuestionsById: Question[] = JSON.parse(sessionStorage.getItem(QUESTIONS) || '{}')
    data.items.forEach((item: Question) => {
      if (!cachedQuestionsById[item.question_id]) {
        cachedQuestionsById[item.question_id] = item
      }
    })
    sessionStorage.setItem(QUESTIONS, JSON.stringify(cachedQuestionsById))
    for (const questionId in cachedQuestionsById) {
      const question = cachedQuestionsById[questionId]
      question.tags.forEach(questionTag => {
        const existingTag = tags.find(tag => tag.name === questionTag)
        if (existingTag) {
          existingTag.questionIds.push(questionId)
        } else if (questionTag !== 'prefect') {
          tags.push({ name: questionTag, questionIds: [questionId] })
        }
      })
    }
    tags.sort((a, b) => {
      if (a.questionIds.length === b.questionIds.length) {
        var textA = a.name.toUpperCase()
        var textB = b.name.toUpperCase()
        return textA < textB ? -1 : textA > textB ? 1 : 0
      }
      return b.questionIds.length - a.questionIds.length
    })
    // Backfill 'active' prop based on query param for UI
    tags.forEach(tag => tag.active = activeTags.includes(tag.name))
  }

  // Adds or removes a tag from currentRoute's 'tags' query params
  function toggleTag(tag: string): void {
    const { currentRoute } = router
    const currentQuery = currentRoute.value.query
    const tagsString = currentQuery.tags as string || ''
    let tags = tagsString ? tagsString.split(';') : []
    if (tags.includes(tag)) {
      tags.splice(tags.indexOf(tag), 1)
    } else {
      tags.push(tag)
    }
    // Strip tags param out of current query and destructure ...rest
    const { tags : _tags, ...query } = currentQuery
    if (tags.length) {
      // Only add tags param back if tag filters present
      query.tags = tags.join(';')
    }
    router.push({ path: currentRoute.value.path, query })
  }

  function onClickTableRow(link: string): void {
    // This would useful for future analytics, but something involving <a>s would likely be better UX, since
    // it would support middle click to open a new tab if desired.
    // TODO: Modal iframe?
    const win: Window = window
    win.location = link
  }
</script>

<style lang="scss">
.so-example {
  padding: 24px 12px;
}

.so-title {
  margin: 0px 0 20px 5px;
}

.so-logo {
  color: #e68e47;
}

.filters {
  margin: 0 0 12px;
  h4 {
    margin: 0 0 8px 2px;
  }
}
.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  margin: 2px;
  .tag {
    font-size: 12px;
    cursor: pointer;
  }
}
.tag {
  color: #39739d;
  white-space: nowrap;
  border-radius: 4px;
  padding: 4px 8px;
  background-color: #e1ecf4;
  &.active {
    color: white;
    background-color: #3e7c9d;
  }
}

.questions-table {
  border-collapse: collapse;
  width: 100%;
  tr {
    cursor: pointer;
    &:hover {
      background-color: #e7e9f8 !important;
    }
    &:nth-child(even) {
      background-color: #f4f4f4;
    }
  }
  th {
    text-align: left;
  }
  th, td {
    padding: 6px 5px;
  }
  td {
    min-height: 20px;
    white-space: nowrap;
    &.title {
      white-space: normal;
    }
  }
}
.owner {
  display: flex;
  align-items: center;
  img {
    width: 20px;
    height: 20px;
    object-fit: cover;
    margin-right: 10px;
  }
}
</style>