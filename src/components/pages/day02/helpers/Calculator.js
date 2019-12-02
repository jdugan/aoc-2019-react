// import ArrayUtil from '../../../../util/Arrays'

class Calculator {
  constructor(data) {
    this.data = data
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
        console.log(`${ i }, ${ j }`)
        if (this.runIntcodeProgram(i, j) === TARGET) {
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
    return this.runIntcodeProgram()
  }

  // ========== HELPERS ===================================

  convertDataToHash() {
    let hash = {}
    this.data.forEach((val, i) => {
      hash[i] = val
    })
    return hash
  }

  runIntcodeProgram(noun, verb) {
    const program = this.convertDataToHash()
    program[1] = (noun === undefined) ? program[1] : noun
    program[2] = (verb === undefined) ? program[2] : verb

    let count  = 0
    let index  = 0
    let opcode = program[index]

    while ((opcode === 1 || opcode === 2) && count < 1000) {
      count     = count + 1
      const i1  = program[index + 1]
      const i2  = program[index + 2]
      const i3  = program[index + 3]

      switch (opcode) {
        case 1:
          program[i3] = program[i1] + program[i2]
          break
        default:
          program[i3] = program[i1] * program[i2]
      }

      index  = index + 4
      opcode = program[index]
    }

    return program[0]
  }
}

export default Calculator
