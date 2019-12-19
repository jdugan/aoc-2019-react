import Computer from "../../../../lib/IntcodeComputer"
import Printer  from "../../../../lib/GridPrinter"
import Point    from "./BeamPoint"

class Beam {
  constructor(program, size = 50) {
    this.program = program
    this.grid    = {}

    this.buildGrid(size)
  }

  // ========== PUBLIC ====================================

  print() {
    const printer = new Printer(this.grid, '.')
    printer.print()
  }

  pullSize() {
    const pulled = Object.values(this.grid).filter(p => p.isPulled())
    return pulled.length
  }

  // ========== PRIVATE ===================================

  buildGrid(size) {
    let args
    let point
    for (let i = 0; i < size; i++) {
      for (let j = 0; j < size; j++) {
        args  = [i, j]
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
}

export default Beam
