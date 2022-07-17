import Computer from "../../../../lib/IntcodeComputer"
import Printer  from "../../../../lib/GridPrinter"
import Point    from "./BeamPoint"

class Beam {
  constructor(program) {
    this.program = program
    this.grid    = {}
  }

  // ========== GRID ======================================

  buildGrid(x0, y0, x1, y1) {
    let args
    let point
    for (let x = x0; x < x1; x++) {
      for (let y = y0; y < y1; y++) {
        args  = [x, y]
        point = this.buildPoint(...args)
        this.grid[point.id()] = point
      }
    }
  }

  buildPoint(x, y) {
    const computer = new Computer([...this.program])
    const status   = computer.run([x, y])
    if (status !== 0) {
      console.log(`Computer failed with exit code ${ status }.`)
    }
    const pulled = computer.output.shift()
    return new Point(x, y, pulled)
  }

  // ========== SEARCH ====================================

  findBestPointByBinarySearch(high, size) {
    let   best = this.buildPoint(high, high)
    let   low  = 0

    while (high - low > 1) {
      const y     = Math.floor((high + low)/2)
      const point = this.findBestPointForRow(y, size)

      if (point) {
        high = y
        best = point
      } else {
        low = y
      }
    }

    return best
  }

  findBestPointByLinearSearch(best, size) {
    let y      = best.y - 1
    let limit  = 5
    let misses = 0
    
    while (misses < limit) {
      const point = this.findBestPointForRow(y, size)
      if (point) {
        best   = point
        misses = 0
      } else {
        misses = misses + 1
      }
      y = y - 1
    }

    return best
  }

  // ------------------------------------------------------
  // slopes
  //   min x => Math.round(~0.56 * y)
  //   max x => Math.round(~0.69 * y)
  //
  findBestPointForRow(y, size) {
    const x0     = Math.floor(y * 0.50)
    const x1     = Math.ceil(y * 0.75)
    const deltas = [
      { dx:        0, dy:        0 },
      { dx: size - 1, dy:        0 },
      { dx:        0, dy: size - 1 },
      { dx: size - 1, dy: size - 1 },
    ]
    let point

    for (let x = x0; x <= x1; x++) {
      let found = true
      for (let i = 0; i < deltas.length; i++) {
        const d   = deltas[i]
        const tmp = this.buildPoint(x + d.dx, y + d.dy)
        if (!tmp.isPulled()) {
          found = false
          break
        }
      }
      if (found) {
        point = this.buildPoint(x, y)
        break
      }
    }

    return point
  }

  // ========== STRENGTH ==================================

  getStrength() {
    const pulled = Object.values(this.grid).filter(p => p.isPulled())
    return pulled.length
  }

  // ========== RENDERING =================================

  print() {
    console.log(this.grid)
    const printer = new Printer(this.grid, '.')
    printer.print()
  }

  // ========== PRIVATE ===================================


}

export default Beam
