import Graph   from "node-dijkstra"
import Point   from "./Point"
import Printer from "../../../../lib/GridPrinter"

class Maze {
  constructor(data) {
    this.data    = data
    this.grid    = this.buildGrid()
    this.portals = this.buildPortals()

    this.assignPortals()
  }

  // ========== PUBLIC ====================================

  shortestPath(start, finish) {
    const startId  = this.getPointIdByName(start)
    const finishId = this.getPointIdByName(finish)
    const graph    = this.buildGraph()
    const path     = graph.path(startId, finishId)
    return path
  }

  // ========== PRIVATE ===================================

  assignPortals() {
    Object.entries(this.portals).forEach(([name, ids]) => {
      ids.forEach(id => {
        this.grid[id].setName(name)
      })
    })
  }

  buildGraph() {
    const graph = new Graph()
    const dirs  = ['north', 'south', 'east', 'west']
    Object.values(this.grid).forEach(p0 => {
      const nodes = {}
      const ps    = dirs.map(d => this.grid[p0.idForDirection(d)]).filter(p => p)
      ps.forEach(p1 => {
        nodes[p1.id()] = 1
      })
      if (p0.getName()) {
        const pp = this.getPortalPartnerById(p0)
        if (pp) {
          nodes[pp.id()] = 1
        }
      }
      graph.addNode(p0.id(), nodes)
    })
    return graph
  }

  buildGrid() {
    const grid = {}
    let   point
    this.data.forEach((row, y) => {
      row.split('').forEach((visual, x) => {
        point = new Point(x, y, visual)
        if (point.isPath()) {
          grid[point.id()] = point
        }
      })
    })
    return grid
  }

  buildPortals() {
    const portals = {}
    const regex1  = /[A-Z]{2}\./g
    const regex2  = /\.[A-Z]{2}/g
    let   data    = [...this.data]
    let   matches
    let   name
    let   index
    let   offset

    data.forEach((row, y) => {      // horizontals
      matches = (row.match(regex1) || []).concat(row.match(regex2) || [])
      matches.forEach(m => {
        index   = 0
        index  = row.slice(index).indexOf(m)
        offset = row.slice(index).indexOf('.')
        name   = m.replace('.', '')
        if (!portals[name]) {
          portals[name] = []
        }
        portals[name].push(`${ index + offset }|${ y }`)
      })
    })
    data = this.invertData(data)
    data.forEach((row, x) => {      // verticals
      matches = (row.match(regex1) || []).concat(row.match(regex2) || [])
      matches.forEach(m => {
        index   = 0
        index = row.slice(index).indexOf(m)
        offset = row.slice(index).indexOf('.')
        name  = m.replace('.', '')
        if (!portals[name]) {
          portals[name] = []
        }
        portals[name].push(`${ x }|${ index + offset }`)
      })
    })
    return portals
  }

  getPointIdByName(name) {
    const point = Object.values(this.grid).find(p => {
      return p.getName() === name
    })
    return point.id()
  }

  getPortalPartnerById(p0) {
    const id  = p0.id()
    const ids = Object.values(this.portals).find(arr => arr.includes(id))
    const pid = ids.filter(item => item !== id)[0]
    return this.grid[pid]
  }

  invertData(input) {
    const xSize = input[0].split('').length
    const ySize = input.length
    const output = Array(xSize).fill("")
    for (let y = 0; y < ySize; y++) {
      input[y].split('').forEach((val, x) => {
        output[x] += val
      })
    }
    return output
  }

  print() {
    const printer = new Printer(this.grid)
    printer.print()
  }
}

export default Maze
