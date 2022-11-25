<template>
  <div class="bubble-chart">
    <div class="d3-tooltip">
      <div class="content" />
      <div class="arrow" />
    </div>
    <svg
      class="bubble-chart"
      width="100%"
      height="400"
    >
      <g />
    </svg>
  </div>
</template>

<script lang="ts">
  import * as d3 from 'd3'
  import { defineComponent, PropType, toRefs } from 'vue'

  export type Bubble = { id: number, img: string, weight: number, radius?: number, tooltip: string }

  let graph: any
  let simulation: d3.Simulation<d3.SimulationNodeDatum, undefined>
  let graphWidth = 1000
  const updateGraphWidth = (): void => {
    var svg = d3.select('svg.bubble-chart')
    if (svg.node()) {
      graphWidth = (svg.node() as Element).getBoundingClientRect().width
      const height = +svg.attr('height')
      svg.attr('viewBox', [
        -graphWidth / 2,
        -height / 2,
        graphWidth,
        height,
      ])
    }
  }

  const graphsEqual = (oldGraph: Bubble[], newGraph: Bubble[]): boolean => {
    // Cheaper than lodash isEquals()?
    const stringify = (graph: Bubble[]): string => graph.map(g => g.id).join(';')
    return stringify(oldGraph) === stringify(newGraph)
  }

  export default defineComponent({
    name: 'BubbleChart',
    inheritAttrs: false,
    expose: [],
    props: {
      data: { type: Object as PropType<Bubble[]>, required: true },
      selectedId: { type: Number, default: -1 },
      clickNode: {
        type: Function as PropType<(id: number) => void>,
        default: null,
      },
    },

    setup(props) {
      const { selectedId } = toRefs(props)
      return {
        selectedId,
      }
    },

    watch: {
      data: {
        handler(a, b) {
          if (!graphsEqual(a, b)) {
            graph.update()
          }
        },
      },

      selectedId: {
        handler(a, b) {
          if (a.join(';') !== b.join(';')) {
            graph.update()
          }
        },
      },
    },

    mounted() {
      updateGraphWidth()
      this.drawTagsGraph()
      graph.update()
      window.addEventListener('resize', this.onResize)
    },

    unmounted() {
      window.removeEventListener('resize', this.onResize)
    },

    methods: {
      onResize() {
        updateGraphWidth()
        graph.update()
      },

      drawTagsGraph() {
        d3.selectAll('svg.bubble-chart > *').remove()
        const svg = d3.select('svg.bubble-chart')
        const height = +svg.attr('height')

        let g = svg.append('g'),
            node = g.append('g').classed('nodes', true).selectAll('.node')

        const ticked = (): void => {
          const radiusY = height / 2
          const radiusX = Math.round(graphWidth / 2)
          node.attr('transform', (d, i) => {
            const yClamped = Math.min(Math.max(d.y, -radiusY + d.radius), radiusY - d.radius)
            d.y = yClamped
            const xClamped = Math.min(
              Math.max(d.x, -radiusX + d.radius),
              radiusX - d.radius,
            )
            d.x = xClamped
            return `translate(${d.x},${d.y})`
          })
        }

        simulation = d3
          .forceSimulation()
          .force('x', d3.forceX().strength(0.025))
          .force('y', d3.forceY().strength(0.025))
          .on('tick', ticked)
          .alphaDecay(0.0228)

        const tooltip = d3.select('.bubble-chart .d3-tooltip')

        graph = Object.assign(svg.node(), {
          update: () => {
            let nodes = this.data

            // Make a shallow copy to protect against mutation, while
            // recycling old nodes to preserve position and velocity.
            const old = new Map(node.data().map((d) => [d.id, d]))
            nodes = nodes.map((d) => Object.assign(old.get(d.id) || {}, d))

            const mouseOver = (_e: Event, d: any): void => {
              // highlight linked nodes
              node.classed('hovered-adjacent', (o) => o.source === d || o.target === d)
              // fade unlinked nodes
              node.classed('not-hovered-adjacent', (o) => !o.source === d || o.target === d)
            }

            function mouseOut(): void {
              node.classed('hovered-adjacent', false)
              node.classed('not-hovered-adjacent', false)
            }

            const halfLog = (num: number): number => Math.log(num) * 0.995 + num * 0.005
            let minWeight = nodes[0].weight
            let maxWeight = 0
            nodes.forEach(node => {
              minWeight = Math.min(minWeight, halfLog(node.weight))
              maxWeight = Math.max(maxWeight, halfLog(node.weight))
            })
            const getRadius = (weight: number): number => {
              if (minWeight === maxWeight) {
                return 90
              }
              return (halfLog(weight) - minWeight) / (maxWeight - minWeight) * 80 + 10
            }

            node = node
              .data(nodes, (d) => d.id)
              .join((enter) => {
                let e = enter
                const g = e.append('g')
                  .on('click', (_event, d) => {
                    this.clickNode && this.clickNode(d.id)
                  })

                const circle = g
                  .append('circle')
                  .attr('r', (d) => {
                    d.radius = getRadius(d.weight)
                    d.x = Math.random() * graphWidth - graphWidth / 2
                    d.y = Math.random() * height - height / 2
                    return d.radius
                  })
                  .attr('x', 0)
                  .attr('y', 0)

                g.append('clipPath')
                  .attr('id', (d) => `clipObj${d.id}`)
                  .append('circle')
                  .attr('x', 0)
                  .attr('y', 0)
                  .attr('r', (d) => d.radius!)


                g.append('image')
                  .attr('xlink:href', (d) => d.img)
                  .attr('referrerpolicy', 'no-referrer')
                  .attr('width', (d) => d.radius! * 2)
                  .attr('height', (d) => d.radius! * 2)
                  .attr('x', (d) => -d.radius!)
                  .attr('y', (d) => -d.radius!)
                  .attr('clip-path', (d) => `url(#clipObj${d.id})`)
                  .on('mouseover', (_event, d) => {
                    tooltip
                      .select('.content')
                      .html(d.tooltip)
                    tooltip
                      .style('opacity', 1)
                      .style(
                        'left',
                        `${d.x + graphWidth/2}px`,
                      )
                      .style('top', `${d.y + height/2 - d.radius}px`)
                    // fade unlinked nodes/links
                    node.classed('not-hovered', (o) => d.id !== o.id)
                  })
                  .on('mouseout', () => {
                    tooltip.style('opacity', 0)
                    node.classed('not-hovered', false)
                  })


                return g
              }, (update) => {
                const DURATION = 500
                update.selectChild('circle')
                  .transition()
                  .duration(DURATION)
                  .attr('r', (d) => {
                    d.radius = getRadius(d.weight)
                    return d.radius
                  })
                update.selectChild('clipPath')
                  .selectChild('circle')
                  .transition()
                  .duration(DURATION)
                  .attr('r', (d) => d.radius!)
                update.selectChild('image')
                  .transition()
                  .duration(DURATION)
                  .attr('width', (d) => d.radius! * 2)
                  .attr('height', (d) => d.radius! * 2)
                  .attr('x', (d) => -d.radius!)
                  .attr('y', (d) => -d.radius!)

                return update
              })

            node
              .classed('active', (d) => this.selectedId === d.id)
              .on('mouseover', mouseOver)
              .on('mouseout', mouseOut)

            node.selectChild('clipPath').attr('r', (d) => d.radius!)

            simulation.nodes(nodes)
            // charge is dependent on size of the bubble, so bigger towards the middle
            function charge(d): number {
              return d.radius**2.0 * 0.01
            }
            simulation.force('charge', d3.forceManyBody().strength(charge))
            simulation.force('collision', d3.forceCollide().radius(d => d.radius + 1))
            simulation.alpha(1).restart()
          },
        })
      },
    },
  })
</script>

<style lang="scss">
div.bubble-chart {
  position: relative;
  margin-bottom: 10px;
}
svg.bubble-chart {
  &.hidden {
    height: 0px;
    display: block;
  }
}


.nodes {
  circle {
    fill: #eef3f7;
  }
  image {
    // This felt far less performant and opacity transitions
    // transition: filter 0.1s linear;
  }
  g {
    transition: opacity 0.2s linear;
    opacity: 1;
    &.not-hovered {
      opacity: 0.5;
      // image {
      //   filter: contrast(30%) brightness(170%) grayscale(1);
      //  -webkit-filter: contrast(30%) brightness(170%) grayscale(1);
      // }
    }
  }
}
</style>
