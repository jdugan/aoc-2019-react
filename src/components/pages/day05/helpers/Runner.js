import Computer from "../../../../lib/IntcodeComputer"

class Runner {
  constructor(program) {
    this.program = program
  }

  compute(part) {
    if (part === "1") {
      return this.simpleRun(1)
    }
    return this.simpleRun(5)
  }

  // ========== RUNNERS ===================================

  simpleRun(initValue) {
    const program  = [...this.program]
    const computer = new Computer(program)
    const input    = [initValue]
    let   status

    while (!computer.halted) {
      status = computer.run(input)
      if (status !== 0) {
        console.log(`Computer failed with exit code ${ status }.`)
      }
    }

    return computer.output.pop()
  }


  // ========== HELPERS ===================================


}
export default Runner
