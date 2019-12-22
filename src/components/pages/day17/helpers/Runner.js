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
    const align  = camera.analyze()
    camera.print()
    return align
  }
}
export default Runner
