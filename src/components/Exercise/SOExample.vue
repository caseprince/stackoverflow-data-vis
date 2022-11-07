<template>
  <div class="so-example">
    <h3 class="so-title">
      <FontAwesomeIcon class="so-logo" :icon="['fab', 'stack-overflow']" />
      Stack Overflow Questions with
      <span class="primary-tag-dropdown">
        <span class="tag" @click="togglePrimaryTagDropdown">{{ getActivePrimaryTab() }}<i>🞃</i></span>
        <menu v-if="state.primaryTagDropdownOpen">
          <template v-for="primaryTag in getPrimaryTagsMenu()" :key="`${primaryTag}_primary`">
            <li @click="changePrimaryTag(primaryTag)">{{ primaryTag }}</li>
          </template>
        </menu>
      </span> tag
    </h3>
    <div class="filters">
      <h4>Filter by {{ tags.length }} additional Tags:</h4>
      <!-- TODO: Search for new tags using https://api.stackexchange.com/docs/tags -->
      <!-- TODO: Explanatory popup -->
      <div class="tags">
        <template v-for="tag in tags" :key="tag.name">
          <span class="tag" :class="tag.active && 'active'" @click="toggleTag(tag.name)">{{ tag.name }}</span>
        </template>
      </div>
    </div>
    <table class="questions-table">
      <tr>
        <th>User</th>
        <th>Rep</th>
        <th>Title</th>
        <th>Views</th>
        <th>Answers</th>
        <th>Votes</th>
        <th>Asked</th>
        <th>Active</th>
      </tr>
      <template v-for="question in questions" :key="question.question_id">
        <tr @click="onClickTableRow(question.link)">
          <td>
            <div class="owner">
              <img :src="question.owner.profile_image" referrerpolicy="no-referrer">
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
    <div v-if="state.loading" class="spinner-holder">
      <FontAwesomeIcon :icon="['fas', 'spinner']" spin size="2x" color="#cccccc" />
    </div>
    <div v-if="!state.loading && !state.hasMore" class="not-has-more">
      Showing {{ questions.length }} of {{ questions.length }} Questions
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
  import moment from 'moment'
  import { onBeforeUnmount, onMounted, reactive } from 'vue'
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
  let state = reactive({ loading: true, hasMore: false, primaryTagDropdownOpen: false })

  const PREFECT = 'prefect'
  const primaryTags: string[] = [PREFECT, 'javascript', 'python', 'java', 'c#', 'php', 'android', 'html']
  function getActivePrimaryTab(): string {
    return (router.currentRoute.value.query.primary_tag || PREFECT) as string
  }
  function getPrimaryTagsMenu(): string[] {
    return primaryTags.filter(tag => tag !== getActivePrimaryTab())
  }

  let page = 1
  const PAGESIZE = 50
  const QUESTIONS = 'questions'

  onMounted(async () => {
    sessionStorage.removeItem(QUESTIONS)
    await loadQuestions()
    window.addEventListener('scroll', onScroll)
  })

  onBeforeUnmount(() => {
    window.removeEventListener('scroll', onScroll)
  })

  onBeforeRouteUpdate(async to => {
    await loadQuestions(to.query)
  })

  const onScroll = (): void => {
    if (window.innerHeight + Math.ceil(window.pageYOffset) >= document.body.offsetHeight) {
      if (state.hasMore && !state.loading) {
        page++
        state.loading = true
        loadQuestions()
      }
    }
  }

  const loadQuestions = async (query: LocationQuery = router.currentRoute.value.query): Promise<void> => {
    // TODO: Other filters, sort
    const activeTags = query.tags ? (query.tags as string).split(';') : []
    activeTags.unshift(query.primary_tag as string || PREFECT)

    const apiParams = {
      page: String(page),
      pagesize: String(PAGESIZE),
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

    state.hasMore = data.has_more
    state.loading = false
    questions.push(...data.items)

    // Cache all unique questions across filters & pagination to aggregate tags, sortable by prominence.
    // NB: When filtering by tags prominence could become skewed towards active tags? Feature or bug?
    const cachedQuestionsById: Question[] = JSON.parse(sessionStorage.getItem(QUESTIONS) || '{}')
    data.items.forEach((item: Question) => {
      if (!cachedQuestionsById[item.question_id]) {
        cachedQuestionsById[item.question_id] = item
      }
    })
    sessionStorage.setItem(QUESTIONS, JSON.stringify(cachedQuestionsById))

    // Extract unique tags from cached questions
    for (const questionId in cachedQuestionsById) {
      const question = cachedQuestionsById[questionId]
      question.tags.forEach(questionTag => {
        const existingTag = tags.find(tag => tag.name === questionTag)
        if (existingTag) {
          existingTag.questionIds.push(questionId)
        // Exclude query.primaryTag or implied 'prefect' primaryTag
        } else if (questionTag !== (query.primary_tag ? query.primary_tag : PREFECT)) {
          tags.push({ name: questionTag, questionIds: [questionId] })
        }
      })
    }
    tags.sort((a, b) => {
      // Primary sort on how many questions have tag (tag prominence)
      if (a.questionIds.length !== b.questionIds.length) {
        return b.questionIds.length - a.questionIds.length
      }
      // Secondary sort alphabetically
      if (a.name < b.name) {
        return -1
      } else if (a.name > b.name) {
        return 1
      }
      return 0
    })
    // Backfill 'active' prop based on query param for tags filter UI
    tags.forEach(tag => tag.active = activeTags.includes(tag.name))
  }

  function togglePrimaryTagDropdown(event: Event): void {
    event.stopPropagation()
    state.primaryTagDropdownOpen = !state.primaryTagDropdownOpen
    if (state.primaryTagDropdownOpen) {
      window.addEventListener('click', togglePrimaryTagDropdown)
    } else {
      window.removeEventListener('click', togglePrimaryTagDropdown)
    }
  }

  function changePrimaryTag(primaryTag: string): void {
    sessionStorage.removeItem(QUESTIONS)
    tags.splice(0, tags.length)
    reset()
    const query = primaryTag === PREFECT ? {} : { primary_tag: primaryTag }
    router.push({ path: router.currentRoute.value.path, query })
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
    reset()
    router.push({ path: currentRoute.value.path, query })
  }

  const reset = (): void => {
    page = 1
    state.loading = true
    questions.splice(0, questions.length)
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

.spinner-holder {
  text-align: center;
  padding: 30px;
}

.primary-tag-dropdown {
  display: inline-block;
  position: relative;
  i {
    font-size: 0.7em;
    position: relative;
    top: -3px;
    right: -3px;
  }
  .tag, li {
    padding: 4px 10px;
  }
  menu {
    position: absolute;
    top: 25px;
    left: 0;
    margin: 0;
    padding: 0;
    list-style-type: none;
    border-radius: 4px;
    overflow: hidden;
  }
  li {
    cursor: pointer;
    color: #39739d;
    background-color: #e1ecf4;
    &:hover {
      color: #106098;
      background-color: #c5dbec;
    }
  }
}

.tag {
  white-space: nowrap;
  border-radius: 4px;
  padding: 4px 8px;
  cursor: pointer;
  color: #39739d;
  background-color: #e1ecf4;
  &:hover {
    color: #106098;
    background-color: #c5dbec;
  }
}

.filters {
  margin: 0 0 12px;
  h4 {
    margin: 0 0 8px 2px;
  }
  .tags {
    display: flex;
    flex-wrap: wrap;
    gap: 4px;
    margin: 2px;
    .tag {
      font-size: 12px;
      &.active {
        color: white;
        background-color: #3e7c9d;
      }
    }
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
.not-has-more {
  text-align: center;
  margin: 20px;
  font-style: italic;
  color: #898989;
}
</style>