import Computer from "../../../../lib/IntcodeComputer"

class Runner {
  constructor(list) {
    this.list = list
  }

  compute(part) {
    if (part === "1") {
      return this.simpleRun(1)
    }
    return this.simpleRun(5)
  }

  // ========== RUNNERS ===================================

  simpleRun(input) {
    const computer = new Computer(this.list)
    const status   = computer.run(input)
    if (status !== 0) {
      console.log(`Computer failed with exit code ${ status }.`)
    }

    return computer.output.pop()
  }


  // ========== HELPERS ===================================


}
export default Runner
