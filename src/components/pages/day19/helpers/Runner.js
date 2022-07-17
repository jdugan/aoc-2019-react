import ArrayUtil from '../../../../util/Arrays'
import Beam      from './Beam'

class Runner {
  constructor(program) {
    this.program = program
  }

  compute(part) {
    if (part === "1") {
      return this.calculateStrength()
    }
    return this.calculateBestPointValue(100)
  }

  // ========== RUNNERS ===================================

  // answers
  //  6681099 => too high (668, 1099)
  //
  calculateBestPointValue(size) {
    const beam = new Beam([...this.program])

    const best_binary = beam.findBestPointByBinarySearch(2 ** 12, size)
    const best_linear = beam.findBestPointByLinearSearch(best_binary, size)

    return best_linear.getScore()
  }

  calculateStrength() {
    const beam  = new Beam([...this.program])

    beam.buildGrid(0, 0, 50, 50)
    beam.print()

    return beam.getStrength()
  }
}
export default Runner
