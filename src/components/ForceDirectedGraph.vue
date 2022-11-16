<template>
  <svg
    class="force-directed-graph"
    :class="!visible && 'hidden'"
    width="100%"
    height="500"
  >
    <g />
  </svg>
</template>

<script lang="ts">
  import * as d3 from 'd3'
  import { defineComponent, PropType, toRefs } from 'vue'
  import rectCollide from '@/utils/rectCollide'

  export type Node = { id: string, weight: number, width?: number }
  export type Link = { source: string, target: string, weight: number }
  export type Graph = { nodes: Node[], links: Link[], maxWeight: number }

  let graph: any
  let simulation: d3.Simulation<d3.SimulationNodeDatum, undefined>
  let graphWidth = 1000
  const updateGraphWidth = (): void => {
    var svg = d3.select('svg.force-directed-graph')
    if (svg.node()) {
      graphWidth = (svg.node() as Element).getBoundingClientRect().width
      const height = +svg.attr('height')
      const NUDGE_HORIZ = 0
      svg.attr('viewBox', [
        -graphWidth / 2 + NUDGE_HORIZ,
        -height / 2,
        graphWidth + NUDGE_HORIZ,
        height,
      ])
    }
  }

  const graphsEqual = (oldGraph: Graph, newGraph: Graph): boolean => {
    // Cheaper than lodash isEquals()?
    const stringify = (graph: Graph): string => `${graph.nodes.map(g => g.id).join(';')}+${graph.links.map(l => `${l.source},${l.target}`).join(';')}`

    return stringify(oldGraph) === stringify(newGraph)
  }

  export default defineComponent({
    name: 'ForceDirectedGraph',
    inheritAttrs: false,
    expose: [],
    props: {
      visible: { type: Boolean, required: true },
      data: { type: Object as PropType<Graph>, required: true },
      activeNodeIds: { type: Array as PropType<string[]>, default: () => [] },
      primaryNodeId: { type: String, default: undefined },
      clickNode: {
        type: Function as PropType<(id: string) => void>,
        default: null,
      },
    },

    setup(props) {
      const { visible, primaryNodeId } = toRefs(props)
      return {
        visible,
        primaryNodeId,
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

      activeNodeIds: {
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
        d3.selectAll('svg.force-directed-graph > *').remove()
        const svg = d3.select('svg.force-directed-graph')
        const height = +svg.attr('height')

        let g = svg.append('g'),
            link = g.append('g').classed('links', true).selectAll('.link'),
            node = g.append('g').classed('nodes', true).selectAll('.node')

        const ticked = (): void => {
          const radiusY = height / 2 - 13
          const radiusX = Math.round(graphWidth / 2) - 10
          node.attr('transform', (d, i) => {
            if (d.id === this.primaryNodeId) {
              // Lock primary node to center/origin
              d.y = d.x = 0
              return `translate(${d.x},${d.y})`
            }
            const yClamped = Math.min(Math.max(d.y, -radiusY), radiusY)
            d.y = yClamped
            const xClamped = Math.min(
              Math.max(d.x, -radiusX + d.width / 2),
              radiusX - d.width / 2,
            )
            d.x = xClamped
            return `translate(${d.x},${d.y})`
          })

          link
            .attr('x1', (d) => d.source.x)
            .attr('y1', (d) => d.source.y)
            .attr('x2', (d) => d.target.x)
            .attr('y2', (d) => d.target.y)
        }

        simulation = d3
          .forceSimulation()
          .force('charge', d3.forceManyBody().strength(-600))
          .force(
            'link',
            d3
              .forceLink()
              .id((d) => d.id)
              .distance(100),
          )
          .force('x', d3.forceX())
          .force('y', d3.forceY())
          .force(
            'collision',
            rectCollide().size((d) => [d.width + 34, 28]),
          )
          .on('tick', ticked)
          .alphaDecay(0.0228)


        // This doesn't feel idiomatic, but the Object.assign is a common pattern:
        // https://observablehq.com/@d3/learn-d3-joins
        // https://observablehq.com/@tgjt/modifying-a-force-directed-graph
        graph = Object.assign(svg.node(), {
          update: () => {
            let { nodes, links, maxWeight } = this.data

            // Make a shallow copy to protect against mutation, while
            // recycling old nodes to preserve position and velocity.
            const old = new Map(node.data().map((d) => [d.id, d]))
            nodes = nodes.map((d) => Object.assign(old.get(d.id) || {}, d))
            links = links.map((d) => Object.assign({}, d))

            simulation.nodes(nodes)
            simulation.force('link').links(links)

            simulation.alpha(1).restart()

            node = node
              .data(nodes, (d) => d.id)
              .join((enter) => {
                let e = enter
                const g = e.append('g').on('click', (_event, d) => {
                  this.clickNode && this.clickNode(d.id)
                })

                const rect = g
                  .append('rect')
                  .attr('height', 22)
                  .attr('y', -12)
                  .attr('rx', 4)
                  .attr('ry', 4)
                g.append('text')
                  .text((d) => {
                    return d.id
                  })
                  .attr('x', function(d) {
                    return -this.getBBox().width / 2
                  })
                  .attr('y', 3)
                  .attr('text-anchor', 'start')

                rect
                  .attr('width', function(d) {
                    // Store newly added text node width in datum for use in collision detection
                    d.width = this.parentNode?.getBBox().width
                    return this.parentNode?.getBBox().width + 20
                  })
                  .attr('x', function(d) {
                    return -this.getBBox().width / 2
                  })

                return g
              })
            node.classed(
              'active',
              (d) => this.activeNodeIds.includes(d.id),
            )

            link = link
              .data(links, (d) => `${d.source.id}\t${d.target.id}`)
              .join('line')
              .attr('opacity', (d) => 0.4 + d.weight / maxWeight * 0.4)
              .attr('stroke-width', (d) => 1 + d.weight / maxWeight * 10)
          },
        })
      },
    },
  })
</script>

<style lang="scss">
svg.force-directed-graph {
  &.hidden {
    height: 0px;
    display: block;
  }
}
.links line {
  stroke: #999;
  stroke-opacity: 0.6;
}

.nodes {
  rect {
    stroke: #fff;
    stroke-width: 1.5px;
    fill: #e1ecf4;
  }
  text {
    font-size: 12px;
    fill: #39739d;
  }
  g:hover {
    cursor: pointer;
    rect {
      fill: #c5dbec;
    }
    text {
      fill: 106098;
    }
  }
  g.active {
    rect {
      fill: #3e7c9d;
    }
    text {
      fill: white;
    }
    &:hover {
      rect {
        fill: #236182;
      }
    }
  }
}
</style>
