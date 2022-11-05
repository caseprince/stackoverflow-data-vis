<template>
  <div class="so-example">
    <h3 class="so-title">
      <FontAwesomeIcon class="so-logo" :icon="['fab', 'stack-overflow']" />
      Stack Overflow Questions with 'Prefect' tag
    </h3>
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

  const questions: Question[] = reactive([])
  // TODO: Filters, sort, pagination (lazyload?)
  const url = 'https://api.stackexchange.com/2.3/questions?pagesize=60&order=desc&sort=activity&site=stackoverflow&tagged=prefect'
  let state = reactive({ loading: true })

  onMounted(async () => {
    const response = await fetch(url)
    const data = await response.json()
    // NB: https://api.stackexchange.com/docs/throttle
    // TODO: localstorage/memoization?
    console.log(`API calls remaining: ${data.quota_remaining}`)

    state.loading = false
    questions.push(...data.items)
  })

  function onClickTableRow(link: string): void {
    // This would useful for future analytics, but something involving <a>s would likely be better UX, since
    // it would support middle click to open a new tab if desired.
    // TODO: Modal iframe?
    const win: Window = window
    win.location = link
  }
</script>

<style lang="scss">
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

.so-example {
  padding: 24px 12px;
}

.so-title {
  margin: 10px 0 20px 8px;
}

.so-logo {
  color: #e68e47;
}

.so-example__tags {
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  margin: 2px;
}

.so-example__tag {
  font-size: 12px;
  color: #39739d;
  white-space: nowrap;
  border-radius: 4px;
  padding: 4px 8px;
  background-color: #e1ecf4;
}
</style>