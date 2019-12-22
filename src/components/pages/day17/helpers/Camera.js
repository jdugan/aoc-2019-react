import ArrayUtil from "../../../../util/Arrays"
import Computer  from "../../../../lib/IntcodeComputer"
import Printer   from "../../../../lib/GridPrinter"
import Tile      from "./Tile"

class Camera {
  constructor(program) {
    this.program = program
    this.grid    = {}
  }

  // ========== PUBLIC ====================================

  analyze() {
    const computer = new Computer([...this.program])
    const status   = computer.run([])     // eslint-disable-line no-unused-vars
    const output   = computer.output
    console.log(output)

    let   y = 0
    let   x = 0
    let   tile

    for (let i = 0; i < output.length; i++) {
      const val = output[i]
      switch (val) {
        case 10:
          y = y + 1
          x = 0
          break
        default:
          tile = new Tile(x, y, val)
          this.grid[tile.id()] = tile
          x = x + 1
      }
    }

    const intersections = this.getIntersections()
    const params        = intersections.map(p => p.alignmentParameter())
    return ArrayUtil.sum(params)
  }

  print() {
    const printer = new Printer(this.grid)
    printer.print()
  }

  // ========== PRIVATE ===================================

  getIntersections() {
    return Object.values(this.grid).filter(p => this.isIntersection(p))
  }

  isIntersection(point) {
    if (point.isScaffold()) {
      const dirs   = ['north', 'south', 'east', 'west']
      const points = dirs.map(d => this.grid[point[`${ d }Id`]()]).filter(p => p)
      return points.every(p => p.isScaffold())
    } else {
      return false
    }
  }
}

export default Camera
