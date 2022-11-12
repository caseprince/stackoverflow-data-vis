<template>
  <div class="so-example">
    <header>
      <h3>
        <FontAwesomeIcon class="so-logo" :icon="['fab', 'stack-overflow']" color="#e68e47" />
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
      <span class="questions-count">
        <FontAwesomeIcon v-if="state.loading && state.hasMore" :icon="['fas', 'spinner']" spin size="1x" color="#cccccc" />
        <span v-if="!state.loading && !state.hasMore">{{ questions.length }} of </span>
        {{ questions.length }} questions loaded
        <button v-if="state.hasMore" :disabled="state.loading" type="button" @click="nextPage">Load {{ PAGESIZE }} More</button>
      </span>
    </header>

    <div class="filters">
      <div class="filters-row">
        <div>
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
        <div class="date-filters">
          <h4>Date Filters:</h4>
          <div class="toggle-switch">
            <label :class="!router.currentRoute.value.query.oldest && 'active'" @click="toggleOldestFirst(false)">newest first</label>
            <div :class="!!router.currentRoute.value.query.oldest && 'on'" @click="toggleOldestFirst(!router.currentRoute.value.query.oldest)" />
            <label :class="!!router.currentRoute.value.query.oldest && 'active'" @click="toggleOldestFirst(true)">oldest first</label>
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

      <!-- TODO: Explanatory tooltip -->
      <div class="filterTagsWrapper" :class="!state.tagsExpanded && 'collapsed'">
        <div ref="filterTags" class="tags">
          <template v-for="tag in tags" :key="tag.name">
            <span class="tag" :class="tag.active && 'active'" @click="toggleTag(tag.name)">{{ tag.name }}</span>
          </template>
        </div>
      </div>
      <hr>
      <div v-if="state.tagsCanExpand" class="more-or-less">
        <span @click="toggleTagsExpanded">
          <span v-if="!state.tagsExpanded">more <FontAwesomeIcon :icon="['fas', 'angle-down']" /></span>
          <span v-else>less <FontAwesomeIcon :icon="['fas', 'angle-up']" /></span>
        </span>
      </div>
    </div>

    <svg v-if="questions.length >= 2" class="timeline" width="100%" height="25px"><g /></svg>

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
  import * as d3 from 'd3'
  import moment from 'moment'
  import { InputHTMLAttributes, onBeforeUnmount, onMounted,  onUpdated, reactive, ref } from 'vue'
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
  })

  const PREFECT = 'prefect'
  const primaryTags: string[] = [PREFECT, 'javascript', 'python', 'java', 'c#', 'php', 'android', 'html']
  function getActivePrimaryTab(): string {
    return (router.currentRoute.value.query.primary_tag || PREFECT) as string
  }
  function getPrimaryTagsMenu(): string[] {
    return primaryTags.filter(tag => tag !== getActivePrimaryTab())
  }

  const COLLAPSED_TAGS_HEIGHT = 85
  const filterTags = ref<HTMLElement | undefined>()

  let page = 1
  const PAGESIZE = 100

  onMounted(async () => {
    await loadQuestions()
    window.addEventListener('scroll', onScroll)
    window.addEventListener('resize', drawHistogram)
  })

  onBeforeRouteUpdate(async to => {
    d3.selectAll('svg.timeline > *').remove()
    questions.splice(0, questions.length)
    await loadQuestions(to.query)
  })

  onUpdated(() => {
    state.tagsCanExpand = !!filterTags.value && filterTags.value.clientHeight > COLLAPSED_TAGS_HEIGHT
    // TODO: skip rendering if screen width not changed
    drawHistogram()
  })

  onBeforeUnmount(() => {
    window.removeEventListener('scroll', onScroll)
    window.addEventListener('resize', drawHistogram)
  })

  const onScroll = (): void => {
    if (window.innerHeight + Math.ceil(window.pageYOffset) >= document.body.offsetHeight) {
      if (state.hasMore && !state.loading) {
        nextPage()
      }
    }
  }

  const nextPage = (): void => {
    page++
    state.loading = true
    loadQuestions()
  }

  function drawHistogram(): void  {
    d3.selectAll('svg.timeline > *').remove()
    const timeLineSvg = d3.select('svg.timeline')
    if (!timeLineSvg.node()) {
      return
    }
    const data = questions.map(question => ({ date: new Date(question.creation_date * 1000) }))

    // https://observablehq.com/@d3/d3-bin-time-thresholds
    function thresholdTime(n) {
      return (_data: any[], min: number, max: number) => {
        return d3.scaleTime().domain([min, max]).ticks(n)
      }
    }

    const bins = d3.bin().value(d => d.date).thresholds(thresholdTime(40))(data)
    const bounds = timeLineSvg.node().getBoundingClientRect()
    const { width, height } = bounds

    const g = timeLineSvg.append('g')

    const x = d3
      .scaleTime()
      .domain(
        d3.extent(data, d => d.date),
      )
      .rangeRound([0, width])

    const y = d3
      .scaleLinear()
      .domain([0, d3.max(bins, (d) =>  d.length)],

      )
      .rangeRound([height, 0])

    g.append('g')
      .attr('transform', `translate(0,${  height  })`)
      .call(d3.axisBottom(x).ticks(17))

    g.append('g')
      .attr('fill', '#a5c9e6')
      .selectAll('rect')
      .data(bins)
      .join('rect')
      .attr('x', d => Math.round(x(d.x0)) + 1)
      .attr('y', d => y(d.length))
      .attr('height', d => y(0) - y(d.length))
      .attr('width', d => Math.round(Math.max(0, x(d.x1) - x(d.x0))) - 1)
      .append('svg:title')
      .text(d => d.length)
  }

  const loadQuestions = async (query: LocationQuery = router.currentRoute.value.query): Promise<void> => {
    // TODO: Date filters, sort
    const activeTags = query.tags ? (query.tags as string).split(';') : []
    const newest = !query.oldest
    activeTags.unshift(query.primary_tag as string || PREFECT)

    const apiParams: any = {
      page: String(page),
      pagesize: String(PAGESIZE),
      order: newest ? 'desc' : 'asc',
      sort: 'creation',
      site: 'stackoverflow',
      tagged: activeTags.join(';'),
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

    drawHistogram()
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
      sessionStorage.setItem(url, JSON.stringify({ data, time: new Date().getTime() }))
    }
    return data
  }

  const resetQuestions = (): void => {
    page = 1
    state.loading = true
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
    const { primary_tag: _primary_tag, ...query } = router.currentRoute.value.query
    if (primaryTag !== PREFECT) {
      query.primary_tag = primaryTag
    }
    resetQuestions()
    router.push({ path: router.currentRoute.value.path, query })
  }


  // TAG FILTERS ~~~~~~~~~~~~~~~~~~~~~~~~

  // Strips (and parses) tags param out of current query and returns destructured ...rest
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
    resetQuestions()
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

    resetQuestions()
    router.push({ path: router.currentRoute.value.path, query })
  }
  function toggleTagsExpanded(): void {
    state.tagsExpanded = !state.tagsExpanded
  }

  // END TAG FILTERS ~~~~~~~~~~~~~~~~~~~~


  const updateOrRemoveQueryParam = (param: string, value?: string | boolean): void => {
    const { [param]: _oldParam, ...query } = router.currentRoute.value.query
    if (value) {
      query[param] = String(value)
    }
    resetQuestions()
    router.push({ path: router.currentRoute.value.path, query })
  }

  function toggleOldestFirst(oldest: boolean): void {
    if (oldest !== !!router.currentRoute.value.query.oldest) {
      updateOrRemoveQueryParam('oldest', oldest)
    }
  }

  function toISOLocalDate(d: Date): string {
    const z = (n: number): string => `0${n}`.slice(-2)
    return `${d.getFullYear()}-${z(d.getMonth()+1)}-${z(d.getDate())}`
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

header {
  display: flex;
  margin-bottom: 20px;
  h3 {
    flex: 0 0 auto;
    margin: 0 0 0 9px;
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

.filters {
  margin: 0 0 12px;
  .filters-row {
    display: flex;
    justify-content: space-between;
  }
  h4 {
    display: inline-block;
    margin: 0 0 12px 2px;
  }
  label {
    color: #878787;
  }
  .date-filters {
    display: flex;
    align-items: center;
    margin: 0 0 12px 2px;
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
    }
  }
  .search-tags {
    margin-left: 10px;
    display: inline-block;
    position: relative;
    border: 1px solid #cccccc;
    padding: 3px 22px 3px 3px;
    border-radius: 4px;
    position: relative;
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
  .filterTagsWrapper.collapsed {
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
      &.active {
        color: white;
        background-color: #3e7c9d;
      }
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

svg.timeline {
  margin: 0 0 20px 0;
  overflow: visible;
}
.questions-table {
  border-collapse: collapse;
  width: 100%;
  tr {
    &:not(:first-child):hover {
      cursor: pointer;
      background-color: #dae9ff !important;
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
    &.time {
      font-size: 13px;
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