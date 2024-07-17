import Graph   from "node-dijkstra"
import Maze    from "./Maze"

class StackedMaze extends Maze {

  // ========== ACTIONS ===================================

  shortestPath(start, finish) {
    const startId  = `${ this.portals[start].outer },0`
    const finishId = `${ this.portals[finish].outer },0`
    let   graph    = this.buildBaseGraph()
    let   path     = null
    let   level    = 0

    while (!path) {
      level = level + 1
      graph = this.addLevelToGraph(graph, level)
      path  = graph.path(startId, finishId)
    }

    return path
  }

  // ========== PORTALS ===================================

  assignBasePortalsToGrid() {
    Object.entries(this.portals).forEach(([name, idHash]) => {
      if (name === 'AA' || name === 'ZZ') {
        this.grid[idHash.outer].setName(name)
        // will never be on the inner edge
      } else {
        this.grid[idHash.outer].makeWall()
        this.grid[idHash.inner].setName(name)
      }
    })

    return this.grid
  }

  assignNestedPortalsToGrid() {
    Object.entries(this.portals).forEach(([name, idHash]) => {
      if (name === 'AA' || name === 'ZZ') {
        this.grid[idHash.outer].makeWall()
        this.grid[idHash.outer].setName()
        // will never be on the inner edge
      } else {
        this.grid[idHash.outer].setName(name)
        this.grid[idHash.inner].setName(name)
      }
    })

    return this.grid
  }

  // ========== GRAPH =====================================

  addLevelToGraph(graph, level) {
    const dirs  = ['north', 'south', 'east', 'west']

    this.assignNestedPortalsToGrid()
    Object.values(this.grid).forEach(p0 => {
      const nodes = {}
      const ps    = dirs.map(d => this.grid[p0.idForDirection(d)]).filter(p => p)
      ps.forEach(p1 => {
        const p1_key = `${ p1.id() },${ level }`
        nodes[p1_key] = 1
      })

      const p0_key = `${ p0.id() },${ level }`
      const p0_name = p0.getName()

      if (p0_name) {
        const p0_portals = this.portals[p0_name]
        let   pp_id
        let   pp_key

        if (p0_portals.outer === p0.id()) {
          pp_id  = p0_portals.inner
          pp_key = `${ pp_id },${ level - 1 }`
        } else {
          pp_id  = p0_portals.outer
          pp_key = `${ pp_id },${ level + 1 }`
        }
        if (pp_id) {
          nodes[pp_key] = 1
        }
      }

      graph.addNode(p0_key, nodes)
    })

    return graph
  }

  buildBaseGraph() {
    const graph = new Graph()
    const dirs  = ['north', 'south', 'east', 'west']

    this.assignBasePortalsToGrid()
    Object.values(this.grid).forEach(p0 => {
      const nodes = {}
      const ps    = dirs.map(d => this.grid[p0.idForDirection(d)]).filter(p => p)
      ps.forEach(p1 => {
        const p1_key = `${ p1.id() },0`
        nodes[p1_key] = 1
      })
      const p0_key = `${ p0.id() },0`
      const p0_name = p0.getName()

      if (p0_name) {
        const p0_portals = this.portals[p0_name]
        let   pp_id
        let   pp_key

        if (p0_portals.inner === p0.id()) {
          pp_id  = p0_portals.outer
          pp_key = `${ pp_id },1`
        }
        if (pp_id) {
          nodes[pp_key] = 1
        }
      }

      graph.addNode(p0_key, nodes)
    })

    return graph
  }
}

export default StackedMaze