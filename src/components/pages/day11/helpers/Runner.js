import Panel from "./HullPanel"
import Robot from "./Robot"

class Runner {
  constructor(program) {
    this.program = program
  }

  compute(part) {
    if (part === "1") {
      return this.squaresPainted()
    }
    return this.registrationTag()
  }

  // ========== RUNNERS ===================================

  registrationTag() {
    const color = 1
    const start = new Panel(0, 0, color)
    const robot = new Robot([...this.program], start)
    return robot.registrationTag()
  }

  squaresPainted() {
    const color = 0
    const start = new Panel(0, 0, color)
    const robot = new Robot([...this.program], start)
    return robot.squaresPainted()
  }
}
export default Runner
