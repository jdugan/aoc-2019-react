import Computer from "../../../../lib/IntcodeComputer"

class Calculator {
  constructor(list) {
    this.list = list
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

        const list = this.prepareList(i, j)
        const computer = new Computer(list)

        if (computer.run() === TARGET) {
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
    const computer = new Computer(this.list)
    return computer.run()
  }

  // ========== HELPERS ===================================

  prepareList(noun, verb) {
    const array = this.list.map(i => i)
    array[1] = noun
    array[2] = verb
    return array
  }
}

export default Calculator
