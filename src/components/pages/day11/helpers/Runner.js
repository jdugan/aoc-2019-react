import Robot from "./Robot"

class Runner {
  constructor(program) {
    this.robot = new Robot(program)
  }

  compute(part) {
    if (part === "1") {
      return this.robot.squaresPainted()
    }
    return 2
  }
}
export default Runner
