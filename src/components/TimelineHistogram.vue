<template>
  <div class="timeline-histogram">
    <div class="d3-tooltip">
      <div class="content" />
      <div class="arrow" />
    </div>
    <div class="svg-wrapper">
      <svg width="100%" height="25px"><g /></svg>
    </div>
  </div>
</template>

<script lang="ts">
  import * as d3 from 'd3'
  import moment from 'moment'
  import { defineComponent, PropType } from 'vue'

  export type HistogramDatum = { date: Date, id: string | number }

  export default defineComponent({
    name: 'TimelineHistogram',
    inheritAttrs: false,
    expose: [],
    props: {
      data: { type: Array as PropType<HistogramDatum[]>, required: true },
      clickBin: {
        type: Function as PropType<(data: HistogramDatum[]) => void>, default: null,
      },
    },

    watch: {
      data: {
        handler() {
          this.drawHistogram()
        },
      },
    },

    mounted() {
      this.drawHistogram()
      window.addEventListener('resize', this.onResize)
    },

    unmounted() {
      window.removeEventListener('resize', this.onResize)
    },

    methods: {
      onResize() {
        this.drawHistogram()
      },

      drawHistogram() {
        d3.selectAll('.timeline-histogram svg > *').remove()
        const timeLineSvg = d3.select('.timeline-histogram svg')
        if (!timeLineSvg.node()) {
          return
        }
        const { data, clickBin } = this

        // https://observablehq.com/@d3/d3-bin-time-thresholds
        function thresholdTime(n) {
          return (_data: any[], min: number, max: number) => {
            return d3.scaleTime().domain([min, max]).ticks(n)
          }
        }

        const bins = d3
          .bin()
          .value((d) => d.date)
          .thresholds(thresholdTime(40))(data)
        const bounds = timeLineSvg.node().getBoundingClientRect()
        const { width, height } = bounds

        const tooltip = d3.select('.timeline-histogram .d3-tooltip')
        const g = timeLineSvg.append('g')

        const x = d3
          .scaleTime()
          .domain(d3.extent(data, (d) => d.date))
          .rangeRound([0, width])

        const y = d3
          .scaleLinear()
          .domain([0, d3.max(bins, (d) => d.length)])
          .rangeRound([height, 0])

        g.append('g')
          .attr('transform', `translate(0,${height})`)
          .call(d3.axisBottom(x).ticks(17))

        const bars = g
          .selectAll('.bar')
          .data(bins)
          .enter()
          .append('g')
          .classed('bar', true)
          .on('mouseover', (_event, d) => {
            const binIndex = bins.indexOf(d)
            let ttContentTransform = 'none'
            if (binIndex >= bins.length - 2) {
              ttContentTransform = 'translate(calc(-50% + 10px), 0)'
            } else if (binIndex <= 1) {
              ttContentTransform = 'translate(calc(50% - 10px), 0)'
            }
            tooltip
              .select('.content')
              .html(
                `${d.length} Questions<br/>over ${moment
                  .duration(moment(d.x1).diff(moment(d.x0)))
                  .humanize()}`,
              )
              // Nudge left-most and right-most tooltips towards center to prevent tooltips overflowing container
              .style('transform', ttContentTransform)
            tooltip
              .style('opacity', 0.9)
              .style(
                'left',
                `${
                  Math.round(x(d.x0)) +
                  1 +
                  (Math.round(Math.max(0, x(d.x1) - x(d.x0))) - 1) / 2
                }px`,
              )
              .style('top', `${y(d.length)}px`)
          })
          .on('mouseout', () => tooltip.style('opacity', 0))
          .on('click', (_event, d) => clickBin(d))

        bars
          .append('rect')
          .attr('fill', '#a5c9e6')
          .attr('x', (d) => Math.round(x(d.x0)) + 1)
          .attr('y', (d) => y(d.length))
          .attr('height', (d) => y(0) - y(d.length))
          .attr('width', (d) => Math.round(Math.max(0, x(d.x1) - x(d.x0))) - 1)

        // Add a full height transparent rect to each histogram bar to make hovering short bars easier
        bars
          .append('rect')
          .attr('fill', 'rgba(255, 0, 0, 0)')
          .attr('x', (d) => Math.round(x(d.x0)) + 1)
          .attr('y', (d) => 0)
          .attr('height', (d) => y(0))
          .attr('width', (d) => Math.round(Math.max(0, x(d.x1) - x(d.x0))) - 1)
          .attr('class', () => !!clickBin && 'clickable')
      },
    },
  })
</script>

<style lang="scss">
div.timeline-histogram {
  position: relative;
  .svg-wrapper {
    // The SVG itself needs overflow: visible because the timeline is below to the bottom-aligned origin.
    // This wrapper is necessary to crop horizontal overflow of tick labels.
    overflow: hidden;
  }
  svg {
    margin: 0 0 20px 0;
    overflow: visible;
    rect.clickable {
      cursor: pointer;
    }
  }
}

// Potentially sharable?
.d3-tooltip {
  opacity: 0;
  position: absolute;
  // top center positioning
  transform: translate(-50%, calc(-100% - 6px));
  pointer-events: none;
  .content {
    line-height: 1;
    padding: 6px;
    background: rgb(30, 30, 30);
    color: #fff;
    border-radius: 4px;
    font-size: 12px;
    white-space: nowrap;
  }
  .arrow {
    position: absolute;
    bottom: 0;
    left: 50%;
    &:before {
      position: absolute;
      content: "";
      border-color: transparent;
      border-style: solid;
      border-width: 0.4rem 0.4rem 0;
      border-top-color: rgb(30, 30, 30);
      transform: translate(-50%, 0);
    }
  }
}
</style>
