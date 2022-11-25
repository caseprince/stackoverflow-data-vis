// @ts-nocheck
// copypasta from https://bl.ocks.org/cmgiven/547658968d365bcc324f3e62e175709b

import * as d3 from 'd3'

function rectCollide() {
  let nodes, sizes, masses
  let size = constant([0, 0])
  let strength = 1
  let iterations = 1

  function force() {
    let node, size, mass, xi, yi
    let i = -1
    while (++i < iterations) {
      iterate()
    }

    function iterate() {
      let j = -1
      const tree = d3.quadtree(nodes, xCenter, yCenter).visitAfter(prepare)

      while (++j < nodes.length) {
        node = nodes[j]
        size = sizes[j]
        mass = masses[j]
        xi = xCenter(node)
        yi = yCenter(node)

        tree.visit(apply)
      }
    }

    function apply(quad, x0, y0, x1, y1) {
      const { data } = quad
      const xSize = (size[0] + quad.size[0]) / 2
      const ySize = (size[1] + quad.size[1]) / 2
      if (data) {
        if (data.index <= node.index) {
          return
        }

        let x = xi - xCenter(data)
        let y = yi - yCenter(data)
        const xd = Math.abs(x) - xSize
        const yd = Math.abs(y) - ySize

        if (xd < 0 && yd < 0) {
          const l = Math.sqrt(x * x + y * y)
          const m = masses[data.index] / (mass + masses[data.index])

          if (Math.abs(xd) < Math.abs(yd)) {
            node.vx -= (x *= xd / l * strength) * m
            data.vx += x * (1 - m)
          } else {
            node.vy -= (y *= yd / l * strength) * m
            data.vy += y * (1 - m)
          }
        }
      }

      return x0 > xi + xSize || y0 > yi + ySize ||
                  x1 < xi - xSize || y1 < yi - ySize
    }

    function prepare(quad) {
      if (quad.data) {
        quad.size = sizes[quad.data.index]
      } else {
        quad.size = [0, 0]
        let i = -1
        while (++i < 4) {
          if (quad[i] && quad[i].size) {
            quad.size[0] = Math.max(quad.size[0], quad[i].size[0])
            quad.size[1] = Math.max(quad.size[1], quad[i].size[1])
          }
        }
      }
    }
  }

  function xCenter(d) {
    return d.x + d.vx + sizes[d.index][0] / 2
  }
  function yCenter(d) {
    return d.y + d.vy + sizes[d.index][1] / 2
  }

  force.initialize = function(_) {
    sizes = (nodes = _).map(size)
    masses = sizes.map((d) => {
      return d[0] * d[1]
    })
  }

  force.size = function(_) {
    return arguments.length
      ? (size = typeof _ === 'function' ? _ : constant(_), force)
      : size
  }

  force.strength = function(_) {
    return arguments.length ? (strength = +_, force) : strength
  }

  force.iterations = function(_) {
    return arguments.length ? (iterations = +_, force) : iterations
  }

  return force
}

function boundedBox() {
  let nodes, sizes
  let bounds
  let size = constant([0, 0])

  function force() {
    let node, size
    let xi, x0, x1, yi, y0, y1
    let i = -1
    while (++i < nodes.length) {
      node = nodes[i]
      size = sizes[i]
      xi = node.x + node.vx
      x0 = bounds[0][0] - xi
      x1 = bounds[1][0] - (xi + size[0])
      yi = node.y + node.vy
      y0 = bounds[0][1] - yi
      y1 = bounds[1][1] - (yi + size[1])
      if (x0 > 0 || x1 < 0) {
        node.x += node.vx
        node.vx = -node.vx
        if (node.vx < x0) {
          node.x += x0 - node.vx
        }
        if (node.vx > x1) {
          node.x += x1 - node.vx
        }
      }
      if (y0 > 0 || y1 < 0) {
        node.y += node.vy
        node.vy = -node.vy
        if (node.vy < y0) {
          node.vy += y0 - node.vy
        }
        if (node.vy > y1) {
          node.vy += y1 - node.vy
        }
      }
    }
  }

  force.initialize = function(_) {
    sizes = (nodes = _).map(size)
  }

  force.bounds = function(_) {
    return arguments.length ? (bounds = _, force) : bounds
  }

  force.size = function(_) {
    return arguments.length
      ? (size = typeof _ === 'function' ? _ : constant(_), force)
      : size
  }

  return force
}

function constant(_) {
  return function() {
    return _
  }
}

export default rectCollide