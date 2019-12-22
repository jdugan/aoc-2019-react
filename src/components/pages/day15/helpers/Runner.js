import Droid from "./Droid"

class Runner {
  constructor(program) {
    this.program = program
  }

  compute(part) {
    if (part === "1") {
      return this.distanceToOxygen()
    }
    return this.timeToFill()
  }

  // ========== RUNNERS ===================================

  distanceToOxygen() {
    const droid = new Droid([...this.program])
    const path  = droid.pathToOxygen()
    return path.length - 1
  }

  timeToFill() {
    const droid = new Droid([...this.program])
    const path  = droid.longestPathFromOxygen()
    return path.length - 1
  }
}
export default Runner
