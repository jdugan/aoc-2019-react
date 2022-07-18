import Graph   from "node-dijkstra"
import Maze    from "./Maze"

class SimpleMaze extends Maze {
  constructor(data) {
    super(data)
  }

  // ========== ACTIONS ===================================

  shortestPath(start, finish) {
    const startId  = this.portals[start].outer
    const finishId = this.portals[finish].outer

    const graph = this.buildGraph()
    const path  = graph.path(startId, finishId)

    return path
  }

  // ========== PORTALS ===================================

  assignPortalsToGrid() {
    Object.entries(this.portals).forEach(([name, idHash]) => {
      Object.values(idHash).forEach(id => {
        this.grid[id].setName(name)
      })
    })

    return this.grid
  }

  // ========== GRAPH =====================================

  buildGraph() {
    const graph = new Graph()
    const grid  = this.assignPortalsToGrid()
    const dirs  = ['north', 'south', 'east', 'west']

    Object.values(this.grid).forEach(p0 => {
      const nodes = {}
      const ps    = dirs.map(d => grid[p0.idForDirection(d)]).filter(p => p)
      ps.forEach(p1 => {
        nodes[p1.id()] = 1
      })
      if (p0.getName()) {
        const ppid = this.getPortalPartnerId(p0)
        if (ppid) {
          nodes[ppid] = 1
        }
      }
      graph.addNode(p0.id(), nodes)
    })

    return graph
  }
}

export default SimpleMaze
