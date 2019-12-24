import Camera    from "./Camera"

class Runner {
  constructor(program) {
    this.program = program
  }

  compute(part) {
    if (part === "1") {
      return this.alignmentSum()
    }
    return 2
  }

  // ========== RUNNERS ===================================

  alignmentSum() {
    const camera = new Camera([...this.program])
    const sum    = camera.analyze()
    camera.print()
    return sum
  }
}
export default Runner
