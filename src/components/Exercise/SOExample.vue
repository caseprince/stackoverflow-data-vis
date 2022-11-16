<template>
  <div class="so-visualizer">
    <header>
      <h3>
        <FontAwesomeIcon class="so-logo" :icon="['fab', 'stack-overflow']" color="#e68e47" />
        Stack Overflow Questions with
        <span class="primary-tag-dropdown">
          <span class="tag" @click="togglePrimaryTagDropdown">{{ getActivePrimaryTag() }}<i>🞃</i></span>
          <menu v-if="state.primaryTagDropdownOpen">
            <template v-for="primaryTag in getPrimaryTagMenuItems()" :key="`${primaryTag}_primary`">
              <li @click="changePrimaryTag(primaryTag)">{{ primaryTag }}</li>
            </template>
          </menu>
        </span> tag
      </h3>
      <span class="questions-count">
        <FontAwesomeIcon v-if="state.loading && state.hasMore" :icon="['fas', 'spinner']" spin size="1x" color="#cccccc" />
        <span v-if="!state.loading && !state.hasMore">{{ questions.length }} of </span>
        {{ questions.length }} questions loaded
        <button v-if="state.hasMore" :disabled="state.loading" type="button" @click="nextPage">Load {{ PAGESIZE }} More</button>
      </span>
    </header>

    <div class="filters">
      <div class="filters-row">
        <div class="tabs">
          <div class="tab" :class="!state.tagsGraphVisible && 'active'" @click="setTagGraph(false)">
            <FontAwesomeIcon :icon="['fas', 'bars']" />Tag List
          </div>
          <div class="tab" :class="state.tagsGraphVisible && 'active'" @click="setTagGraph(true)">
            <FontAwesomeIcon :icon="['fas', 'circle-nodes']" />Tag Relationship Graph
          </div>
        </div>
        <div class="date-filters">
          <h4>Date Filters:</h4>
          <div class="toggle-switch">
            <label :class="!router.currentRoute.value.query.oldest && 'active'" @click="toggleOldestFirst(false)">newest</label>
            <div :class="!!router.currentRoute.value.query.oldest && 'on'" @click="toggleOldestFirst(!router.currentRoute.value.query.oldest)" />
            <label :class="!!router.currentRoute.value.query.oldest && 'active'" @click="toggleOldestFirst(true)">oldest</label>
          </div>
          <label for="start-date">from: </label>
          <input
            id="start-date"
            type="date"
            min="2008-01-01"
            :max="toISOLocalDate(new Date())"
            :value="router.currentRoute.value.query.from_date"
            @input="setFromDate"
          >
          <label for="end-date">to: </label>
          <input
            id="end-date"
            type="date"
            min="2008-01-01"
            :max="toISOLocalDate(new Date())"
            :value="router.currentRoute.value.query.to_date"
            @input="setToDate"
          >
        </div>
      </div>

      <div class="tag-filters-header">
        <h4>Filter by {{ tags.length }} additional tags:</h4>
        <div class="search-tags">
          <input ref="searchTagsInput" placeholder="Search for tags" @input="changeSearchTagsInput" @keydown="searchTagsInputKeyDown">
          <FontAwesomeIcon :icon="['fas', 'magnifying-glass']" color="#cccccc" size="sm" />
          <menu v-if="searchTags.results.length">
            <template v-for="(tag, index) in searchTags.results" :key="`${tag}_searched`">
              <li class="tag" :class="index === searchTags.keyIndex && 'keyboard-selected'" @click="addSearchedTag(tag)">
                {{ tag }}
              </li>
            </template>
          </menu>
        </div>
      </div>

      <div v-if="!state.tagsGraphVisible">
        <div class="filter-tags-wrapper" :class="!state.tagsExpanded && 'collapsed'">
          <div ref="filterTags" class="tags">
            <template v-for="tag in tags" :key="tag.name">
              <span class="tag" :class="tag.active && 'active'" @click="toggleTag(tag.name)">{{ tag.name }}</span>
            </template>
          </div>
        </div>
        <div v-if="state.tagsCanExpand" class="more-or-less">
          <hr>
          <span @click="toggleTagsExpanded">
            <span v-if="!state.tagsExpanded">more <FontAwesomeIcon :icon="['fas', 'angle-down']" /></span>
            <span v-else>less <FontAwesomeIcon :icon="['fas', 'angle-up']" /></span>
          </span>
        </div>
      </div>

      <ForceDirectedGraph
        v-if="state.tagsGraphInited"
        :visible="state.tagsGraphVisible"
        :data="getTagsGraphData()"
        :active-node-ids="getActiveTags()"
        :click-node="clickGraphNode"
      />
    </div>

    <TimelineHistogram
      v-if="questions.length >= 2"
      :data="getHistogramData()"
      :click-bin="clickHistogramBin"
    />

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
        <tr :id="question.question_id.toString()" @click="onClickTableRow(question.link)">
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
          <td class="answers">
            {{ question.answer_count }}
            <!-- ✅ -->
            <span v-if="question.accepted_answer_id"><FontAwesomeIcon :icon="['fas', 'circle-check']" color="#00be00" /></span>
          </td>
          <td>{{ question.score }}</td>
          <td class="time">
            {{ moment(question.creation_date * 1000).fromNow() }}
          </td>
          <td class="time">
            {{ moment(question.last_activity_date * 1000).fromNow() }}
          </td>
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
  import { InputHTMLAttributes, onBeforeUnmount, onMounted, onUpdated, reactive, ref } from 'vue'
  import { LocationQuery, onBeforeRouteUpdate } from 'vue-router'
  import ForceDirectedGraph, { Graph, Link, Node } from '@/components/ForceDirectedGraph.vue'
  import TimelineHistogram, { HistogramDatum } from '@/components/TimelineHistogram.vue'
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
    questionIds: number[],
    active?: boolean,
  }

  const questions: Question[] = reactive([])
  const tags: Tag[] = reactive([])

  let state = reactive({
    loading: true,
    hasMore: false,
    primaryTagDropdownOpen: false,
    tagsCanExpand: false,
    tagsExpanded: false,
    // The force-directed Tags graph is initialized only once, when first displayed. After initialization its visibility
    // is toggled with css (.hidden). This enables us to preserve the layout while switching tabs or adding/removing nodes,
    // keeping 'jitter' to a minimum. NB: `v-show` wasn't suited to this due to the edge-case of adding nodes while the graph
    // is hidden; node.getBBox() returns 0 when `svg { display: none }`, which breaks layout & collision detection for added nodes.
    // https://stackoverflow.com/questions/28282295/getbbox-of-svg-when-hidden
    tagsGraphInited: false,
    tagsGraphVisible: false,
  })
  let page = 1
  const PAGESIZE = 100

  onMounted(async () => {
    await loadQuestions()
    window.addEventListener('scroll', onScroll)
  })

  onBeforeRouteUpdate(async to => {
    page = 1
    await loadQuestions(to.query)
  })

  const COLLAPSED_TAGS_HEIGHT = 85
  const filterTags = ref<HTMLElement | undefined>()
  onUpdated(() => {
    state.tagsCanExpand = !!filterTags.value && filterTags.value.clientHeight > COLLAPSED_TAGS_HEIGHT
  })

  onBeforeUnmount(() => {
    window.removeEventListener('scroll', onScroll)
  })

  const onScroll = (): void => {
    if (window.innerHeight + Math.ceil(window.pageYOffset) >= document.body.offsetHeight) {
      if (state.hasMore && !state.loading) {
        nextPage()
      }
    }
  }

  /*
  * PRIMARY TAG DROPDOWN
  */

  const PREFECT = 'prefect'
  const primaryTags: string[] = [PREFECT, 'javascript', 'python', 'java', 'c#', 'php', 'android', 'html']
  function getActivePrimaryTag(): string {
    return (router.currentRoute.value.query.primary_tag || PREFECT) as string
  }
  function getPrimaryTagMenuItems(): string[] {
    return primaryTags.filter(tag => tag !== getActivePrimaryTag())
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
  // Changes or removes primary tag query param and resets 2ndary tags
  function changePrimaryTag(primaryTag: string): void {
    const [_qTags, oldQuery] = getTagsAndTaglessQuery()
    const { primary_tag: _primary_tag, ...query } = oldQuery
    if (primaryTag !== PREFECT) {
      query.primary_tag = primaryTag
    }
    router.push({ path: router.currentRoute.value.path, query })
  }

  /*
   * DATA LOADING
   */

  const nextPage = (): void => {
    page++
    loadQuestions()
  }

  // Updates query param or removes it if value is falsy
  const updateOrRemoveQueryParam = (param: string, value?: string | boolean): void => {
    const { [param]: _oldParam, ...query } = router.currentRoute.value.query
    if (value) {
      query[param] = String(value)
    }
    router.push({ path: router.currentRoute.value.path, query })
  }

  const fetchDataWithCache = async (url: string): Promise<any> => {
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
      try {
        sessionStorage.setItem(url, JSON.stringify({ data, time: new Date().getTime() }))
      } catch (error) {
        console.error(error)
        console.log('Clearing sessionStorage...')
        sessionStorage.clear()
      }
    }
    return data
  }

  const loadQuestions = async (query: LocationQuery = router.currentRoute.value.query): Promise<void> => {
    state.loading = true

    const activeTags = query.tags ? (query.tags as string).split(';') : []
    activeTags.unshift(query.primary_tag as string || PREFECT)

    const apiParams: any = {
      page: String(page),
      pagesize: String(PAGESIZE),
      order: !query.oldest ? 'desc' : 'asc',
      sort: 'creation',
      site: 'stackoverflow',
      tagged: activeTags.sort((a, b) => {
        // sort alphabetically for best caching by url
        if (a < b) {
          return -1
        } else if (a > b) {
          return 1
        }
        return 0
      }).join(';'),
    }
    const timeZoneOffsetSeconds = new Date().getTimezoneOffset() * 60
    if (query.from_date) {
      apiParams.fromdate = new Date(query.from_date as string).getTime() / 1000 + timeZoneOffsetSeconds
    }
    if (query.to_date) {
      const dayInSeconds = 60 * 60 * 24
      apiParams.todate = new Date(query.to_date as string).getTime() / 1000 + dayInSeconds + timeZoneOffsetSeconds
    }

    const URLParams = new URLSearchParams(apiParams).toString()
    const url = `https://api.stackexchange.com/2.3/questions?${URLParams}`
    const data = await fetchDataWithCache(url)
    state.loading = false
    state.hasMore = data.has_more
    if (page === 1) {
      questions.splice(0, questions.length)
    }
    questions.push(...data.items)

    tags.splice(0, tags.length)

    // Extract unique tags from cached question tag sets, and aggregate list of which questions have each tag
    questions.forEach(question => {
      question.tags.forEach(questionTag => {
        const existingTag = tags.find(tag => tag.name === questionTag)
        if (existingTag) {
          existingTag.questionIds.push(question.question_id)
        // Exclude query.primaryTag or implied 'prefect' primaryTag
        } else if (questionTag !== (query.primary_tag ? query.primary_tag : PREFECT)) {
          tags.push({ name: questionTag, questionIds: [question.question_id] })
        }
      })
    })
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

    // It's possible by searching for and adding non-overlapping tags that we'll have 0 question results.
    // We can add those dead-end tags to the UI here so they can be cleared.
    const [qTags] = getTagsAndTaglessQuery(query)
    qTags.forEach(qTag => {
      if (!tags.find(tag => tag.name === qTag)) {
        tags.unshift({ name: qTag, questionIds: [], active: true })
      }
    })
  }

  /*
   * FORCE DIRECTED TAGS GRAPH
   */

  function setTagGraph(showGraph: boolean): void {
    state.tagsGraphInited = true
    state.tagsGraphVisible = showGraph
  }

  const getTagsGraphData = (): Graph => {
    const tagNodes: Node[] = []
    questions.forEach(question => {
      question.tags.forEach(tag => {
        if (!tagNodes.find(t => t.id === tag)) {
          if (tag === PREFECT) {
            // if (tag === query.primary_tag || !query.primary_tag && tag === PREFECT) {
            // Put primary tag at index 0 so we can force-center it
            tagNodes.unshift({ id: tag })
          } else {
            tagNodes.push({ id: tag })
          }
        }
      })
    })

    let maxWeight = 0
    const tagLinks: Link[] = []
    questions.forEach(question => {
      question.tags.forEach(tag1 => {
        question.tags.forEach(tag2 => {
          if (tag1 !== tag2) {
            const existingLink = tagLinks.find(
              // link direction is arbitrary so we need to test both directions
              link => link.source === tag1 && link.target === tag2 ||
                link.source === tag2 && link.target === tag1,
            )
            if (existingLink) {
              existingLink.weight++
              maxWeight = Math.max(maxWeight, existingLink.weight)
            } else {
              tagLinks.push({
                source: tag1,
                target: tag2,
                weight: 1,
              })
            }
          }
        })
      })
    })
    return {
      nodes: tagNodes,
      links: tagLinks,
      maxWeight,
    }
  }

  function clickGraphNode(id: string): void {
    const { query } = router.currentRoute.value
    if (query.primary_tag && id !== query.primary_tag || !query.primary_tag && id !== PREFECT) {
      toggleTag(id)
    }
  }

  const getActiveTags = (): string[] => {
    const [qTags] = getTagsAndTaglessQuery(router.currentRoute.value.query)
    qTags.push(router.currentRoute.value.query.primary_tag as string || PREFECT)
    return qTags
  }

  /*
   * DATE FILTERS
   */

  function toggleOldestFirst(oldest: boolean): void {
    if (oldest !== !!router.currentRoute.value.query.oldest) {
      updateOrRemoveQueryParam('oldest', oldest)
    }
  }

  function toISOLocalDate(date: Date): string {
    const zeroPad = (num: number): string => `0${num}`.slice(-2)
    return `${date.getFullYear()}-${zeroPad(date.getMonth()+1)}-${zeroPad(date.getDate())}`
  }

  // TODO: Prevent/warn on negative date ranges?
  function setFromDate(event: Event): void {
    const fromDate = (event.target as HTMLInputElement).value
    updateOrRemoveQueryParam('from_date', fromDate)
  }

  function setToDate(event: Event): void {
    const toDate = (event.target as HTMLInputElement).value
    updateOrRemoveQueryParam('to_date', toDate)
  }

  /*
   * TAG FILTERS
   */

  // Strips out (and parses) tags param from query and returns destructured ...rest
  const getTagsAndTaglessQuery = (query: LocationQuery = router.currentRoute.value.query): [string[], LocationQuery] => {
    const { tags : tagsString, ...newQuery } = query
    return [tagsString ? (tagsString as string).split(';') : [], newQuery]
  }

  const searchTags: { results: string[], keyIndex: number } = reactive({ results: [], keyIndex: -1 })
  const searchTagsInput = ref<InputHTMLAttributes | undefined>()

  async function changeSearchTagsInput(event: Event): Promise<void> {
    // TODO: Debounce?
    const searchTerm = (event.target as HTMLInputElement).value
    if (!searchTerm) {
      searchTags.results.splice(0, questions.length)
      return
    }
    window.addEventListener('click', clearSearchTags)
    const url = `https://api.stackexchange.com/2.3/tags?pagesize=10&order=desc&sort=popular&site=stackoverflow&inname=${searchTerm}`
    const data = await fetchDataWithCache(url)
    searchTags.results = data.items.map((tag: any) => tag.name)
  }

  function searchTagsInputKeyDown(event: KeyboardEvent): void {
    if (event.key === 'ArrowDown') {
      searchTags.keyIndex = (searchTags.keyIndex + 1) % searchTags.results.length
    } else if (event.key === 'ArrowUp') {
      searchTags.keyIndex = searchTags.keyIndex > 0 ? searchTags.keyIndex - 1 : searchTags.results.length - 1
    } else if (event.key === 'Enter' && searchTags.keyIndex >= 0 && searchTags.results.length) {
      addSearchedTag(searchTags.results[searchTags.keyIndex])
      clearSearchTags()
    }
  }

  function addSearchedTag(tag: string): void {
    const [qTags, query] = getTagsAndTaglessQuery()
    qTags.push(tag)
    query.tags = qTags.join(';')
    router.push({ path: router.currentRoute.value.path, query })
  }
  const clearSearchTags = (): void => {
    if (searchTagsInput.value) {
      searchTagsInput.value.value = ''
    }
    searchTags.results.splice(0, searchTags.results.length)
    searchTags.keyIndex = -1
    window.removeEventListener('click', clearSearchTags)
  }

  // Adds or removes a tag from currentRoute's 'tags' query params
  // TODO: Alphabetize tags param to optimize caching?
  function toggleTag(tag: string): void {
    const [qTags, query] = getTagsAndTaglessQuery()
    if (qTags.includes(tag)) {
      qTags.splice(qTags.indexOf(tag), 1)
    } else {
      qTags.push(tag)
    }
    if (qTags.length) {
      // Only add tags param back if tag filters present
      query.tags = qTags.join(';')
    }
    router.push({ path: router.currentRoute.value.path, query })
  }

  function toggleTagsExpanded(): void {
    state.tagsExpanded = !state.tagsExpanded
  }

  /*
   * HISTOGRAM
   */

  const getHistogramData = (): HistogramDatum[] => questions.map((question) => ({
    id: question.question_id,
    date: new Date(question.creation_date * 1000),
  }))
  function clickHistogramBin(d: HistogramDatum[]): void {
    Array.from(document.querySelectorAll('.flash')).forEach((el) => el.classList.remove('flash'))
    d.forEach((datum, i) => {
      const el = document.getElementById(String(datum.id))
      el?.classList.add('flash')
      if (i === 0) {
        el?.scrollIntoView()
      }
    })
  }

  /*
   * QUESTIONS TABLE
   */

  function onClickTableRow(link: string): void {
    // This would useful for future analytics, but something involving <a>s would likely be better UX, since
    // it would support middle click to open a new tab if desired.
    // TODO: Modal iframe?
    const win: Window = window
    win.location = link
  }
</script>

<style lang="scss">
@import "../../scss/_mixins";

.so-visualizer {
  padding: 24px 12px;
}

header {
  display: flex;
  margin-bottom: 10px;
  height: 25px;
  h3 {
    flex: 0 0 auto;
    margin: 0 0 0 9px;
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
      z-index: 10;
      top: 25px;
      left: 0;
      margin: 0;
      padding: 0;
      list-style-type: none;
      border-radius: 4px;
      overflow: hidden;
      box-shadow: 0px 1px 4px rgb(0 0 0 / 30%);
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
  }
  .questions-count {
    flex: 1 1 auto;
    text-align: right;
    font-size: 15px;
    color: #878787;
    font-weight: normal;
    margin-right: 10px;
    button {
      margin-left: 10px;
      padding: 4px 8px 3px 8px;
      color: #424242;
      background-color: #e4e4e4;
      border: 1px solid #3e3e3e;
      border-radius: 3px;
      &:hover:not(:disabled) {
        cursor: pointer;
        background-color: #efefef;;
      }
      &:disabled {
        color: #aaaaaa;
      }
    }
  }
}

.toggle-switch {
  display: flex;
  align-items: center;
  label {
    font-size: 14px;
    padding: 0 7px;
    &:hover:not(.active) {
      cursor: pointer;
      color: #0c3c9b;
      text-decoration: underline;
    }
  }
  > div {
    width: 36px;
    height: 18px;
    border-radius: 9px;
    position: relative;
    background-color: #eeeeee;
    border: 1px solid #cccccc;
    box-shadow: 0px 1px 4px rgb(0 0 0 / 14%) inset;
    cursor: pointer;
    &:after {
      content: '';
      display: block;
      position: absolute;
      top: 3px;
      left: 3px;
      width: 12px;
      height: 12px;
      border-radius: 6px;
      background-color: #5592be;
      transition: left 0.1s ease-in-out;
    }
    &.on:after {
      left: 21px;
    }
    &:hover {
      background-color: #efefef;
      &:after {
        background-color: #72aeda;
      }
    }
  }
}

.spinner-holder {
  text-align: center;
  padding: 30px;
}

// General tag styling is shared between header, dropdown menu items, and tag filter list
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
  &.active {
    color: white;
    background-color: #3e7c9d;
    &:hover {
      background-color: #236182;
    }
  }
}

.filters {
  margin: 0 0 12px;
  .filters-row {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
    border-bottom: 1px solid #cccccc;
  }
  h4 {
    display: inline-block;
    margin: 0 10px 5px 2px;
  }
  label {
    color: #878787;
  }
  .tag-filters-header {
    flex: 1 1 1px;
    margin-bottom: 7px;
    padding-left: 9px;
  }
  .date-filters {
    display: flex;
    align-items: center;
    margin: 0 10px 10px 2px;
    h4 {
      margin: 0 10px 0 0;
    }
    > label {
      margin: 0 5px 0 15px;
      font-size: 14px;
    }
    input {
      border: 1px solid #cccccc;
      padding: 3px 5px;
      border-radius: 4px;
      font-family: inherit;
      height: 19px;
      &:focus-visible, &:focus {
        outline: none;
        border: 1px solid #0d70a9;
      }
    }
  }
  .search-tags {
    display: inline-block;
    position: relative;
    border: 1px solid #cccccc;
    padding: 3px 22px 3px 3px;
    border-radius: 4px;
    position: relative;
    &:has(> input:focus) {
      border: 1px solid #0d70a9;
    }
    input {
      all: unset;
      display: revert;
      border: none;
      width: 120px;
      font-size: 14px;
    }
    svg {
      position: absolute;
      right: 5px;
      top: 6px;
    }
    menu {
      position: absolute;
      z-index: 9;
      top: 25px;
      left: 0;
      margin: 0;
      padding: 4px;
      list-style-type: none;
      border-radius: 4px;
      background-color: white;
      border: 1px solid #cccccc;
      box-shadow: 0px 1px 4px rgb(0 0 0 / 30%);
      li {
        font-size: 12px;
        cursor: pointer;
        color: #39739d;
        background-color: #e1ecf4;
        &:not(:last-child) {
          margin-bottom: 4px;
        }
        &:hover, &.keyboard-selected {
          color: #106098;
          background-color: #c5dbec;
        }
      }
    }
  }
  .filter-tags-wrapper.collapsed {
    max-height: 80px;
    overflow: hidden;
  }
  .tags {
    display: flex;
    flex-wrap: wrap;
    gap: 4px;
    padding: 2px 2px 8px;
    .tag {
      font-size: 12px;
    }
  }
  hr {
    margin: 0;
    border-top: 1px solid #c4c4c4;
  }
  .more-or-less {
    text-align: center;
    > span {
      margin: 3px 0 -13px 0;
      cursor: pointer;
      font-size: 13px;
      color: #cccccc;
      padding: 8px 10px;
      &:hover {
        color: #8f8f8f
      }
    }
  }
}

.tabs {
  display: flex;
  align-items: end;
  .tab {
    border: 1px solid #cccccc;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    background-color: #ececec;
    font-size: 14px;
    padding: 7px 15px 6px;
    margin-left: 10px;
    position: relative;
    bottom: -1px;
    display: flex;
    align-items: center;
    svg {
      margin-right: 5px;
    }
    &.active {
      border-bottom: 1px solid white;
      background-color: white;
    }
    &:not(.active):hover {
      cursor: pointer;
      background-color: #f4f4f4;
    }
  }
}

.questions-table {
  border-collapse: collapse;
  width: 100%;
  tr {
    &:not(:first-child):hover {
      cursor: pointer;
      background-color: #e1edff !important;
    }
    &:nth-child(even) {
      background-color: #f4f4f4;
    }
    &.flash {
      td {
        @include keyframes(flash){
          0%{
            background-color: rgba(163, 211, 255, 0.8)
          }
          100%{
            background-color: rgb(95, 165, 255, 0)
          }
        }
        @include animation('flash 1s linear 1');
      }
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
    &.title {
      white-space: normal;
    }
    &.time {
      font-size: 13px;
    }
    &.answers {
      > span {
        margin-left: 5px;
      }
    }
  }
}

.not-has-more {
  text-align: center;
  margin: 20px;
  font-style: italic;
  color: #898989;
}
</style>