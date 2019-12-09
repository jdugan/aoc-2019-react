import Computer from "../../../../lib/IntcodeComputer"

class Runner {
  constructor(program) {
    this.program = program
  }

  compute(part) {
    if (part === "1") {
      return this.simpleRun([1])
    }
    return this.simpleRun([2])
  }

  // ========== RUNNERS ===================================

  simpleRun(input) {
    const computer = new Computer([...this.program])
    const status   = computer.run(input)
    if (status !== 0) {
      console.log(`Computer failed with exit code ${ status }.`)
    }

    console.log(computer.output)

    return computer.output
  }
}
export default Runner
