import Computer from "../../../../lib/IntcodeComputer"

class Runner {
  constructor(program) {
    this.program = program
  }

  compute(part) {
    if (part === "1") {
      return this.simpleRun()
    }
    return this.recursiveRun()
  }

  // ========== RUNNERS ===================================

  recursiveRun() {
    const TARGET = 19690720
    let   found  = false
    let   noun   = 0
    let   verb   = 0

    for (let i = 0; i < 100; i++) {
      for (let j = 0; j < 100; j++) {
        const program = this.prepareProgram(i, j)
        const computer = new Computer(program)
        const status   = computer.run()
        if (status !== 0) {
          console.log(`Computer failed at index ${ i }, ${ j } with exit code ${ status }.`)
        }

        if (computer.program[0] === TARGET) {
          noun  = i
          verb  = j
          found = true
          break
        }
      }
      if (found) {
        break
      }
    }

    return (noun * 100) + verb
  }

  simpleRun() {
    const program  = [...this.program]
    const computer = new Computer(program)
    const status   = computer.run()
    if (status !== 0) {
      console.log(`Computer failed with exit code ${ status }.`)
    }

    return computer.program[0]
  }

  // ========== HELPERS ===================================

  prepareProgram(noun, verb) {
    const program = [...this.program]
    program[1] = noun
    program[2] = verb
    return program
  }
}

export default Runner
