import Beam from "./Beam"

class Runner {
  constructor(program) {
    this.program = program
  }

  compute(part) {
    if (part === "1") {
      return this.pullSize()
    }
    return 2
  }

  // ========== RUNNERS ===================================

  pullSize() {
    const beam = new Beam([...this.program], 50)
    beam.print()
    return beam.pullSize()
  }
}
export default Runner
