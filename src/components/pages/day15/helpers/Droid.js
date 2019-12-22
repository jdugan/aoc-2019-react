import Computer from "../../../../lib/IntcodeComputer"
import Graph    from "node-dijkstra"
import Point    from "./Point"
import Printer  from "../../../../lib/GridPrinter"

class Droid {
  constructor(program) {
    this.program = program
    this.grid    = {}

    this.traverse()
  }

  // ========== PUBLIC ====================================

  longestPathFromOxygen() {
    let   longest   = []
    const startId   = this.getOxygenId()
    const possibles = Object.values(this.grid).filter(p => {
      return p.id() !== startId && this.isDeadEnd(p)
    })
    possibles.forEach(point => {
      const finishId = point.id()
      const graph    = this.buildGraph()
      const path     = graph.path(startId, finishId)
      if (path && path.length > longest.length) {
        longest = path
      }
    })
    return longest
  }

  pathToOxygen() {
    const startId  = this.getOriginId()
    const finishId = this.getOxygenId()
    const graph    = this.buildGraph()
    const path     = graph.path(startId, finishId)
    return path
  }

  // ========== PRIVATE ===================================

  buildGraph() {
    const graph  = new Graph()
    const dirs   = ['north', 'south', 'east', 'west']
    const points = Object.values(this.grid).filter(p => !p.isWall())
    points.forEach(p => {
      const nodes = {}
      const ps    = dirs.map(d => this.grid[p.idForDirection(d)]).filter(p => p && !p.isWall())
      ps.forEach(p1 => nodes[p1.id()] = 1)
      graph.addNode(p.id(), nodes)
    })
    return graph
  }

  getCommandForDirection(dir) {
    const map = {
      'north': 1,
      'south': 2,
      'west':  3,
      'east':  4,
    }
    return map[dir]
  }

  getOriginId() {
    const point = Object.values(this.grid).find(p => p.isStart())
    return point.id()
  }

  getOxygenId() {
    const point = Object.values(this.grid).find(p => p.isFinish())
    return point.id()
  }

  getVisualForResult(result) {
    const map = {
      0: '#',
      1: '.',
      2: 'O'
    }
    return map[result]
  }

  isDeadEnd(point) {
    const dirs   = point.getDirections()
    const points = dirs.reduce((arr, d) => {
      const p = this.grid[point[`${ d }Id`]()]
      if (p && !p.isWall()) {
        arr.push(p)
      }
      return arr
    }, [])
    return points.length === 1
  }

  print() {
    const missing = new Point(0, 0, '#')
    const printer = new Printer(this.grid, missing, true)  // invert to cartesian
    printer.print()
  }

  registerPoint(point) {
    const id = point.id()
    if (!this.grid[id]) {
      this.grid[id] = point
    }
  }

  traverse() {
    const directions  = ['north', 'east', 'south', 'west']
    const computers   = {}
    const computer    = new Computer([...this.program], true)
    const start       = new Point(0, 0, 'S')
    const startId     = start.id()
    const traversed   = new Set()
    const untraversed = new Set()

    this.registerPoint(start)
    untraversed.add(startId)
    computers[startId] = computer

    while (untraversed.size > 0) {
      const currId    = [...untraversed].shift()
      const currPoint = this.grid[currId]
      const currComp  = computers[currId]

      directions.forEach(dir => {
        const cmd  = this.getCommandForDirection(dir)
        const comp = new Computer([...currComp.program], true)
        comp.run([cmd])

        const [x1, y1] = currPoint.idForDirection(dir).split('|').map(Number)
        const result   = comp.output.pop()
        const visual   = this.getVisualForResult(result)
        const point    = new Point(x1, y1, visual)
        const id       = point.id()
        this.registerPoint(point)
        switch (result) {
          case 1:
          case 2:
            computers[id] = comp
            if (!traversed.has(id)) {
              untraversed.add(id)
            }
            break
          default:
            // noop
        }
      })
      traversed.add(currId)
      untraversed.delete(currId)
    }
  }
}

export default Droid
