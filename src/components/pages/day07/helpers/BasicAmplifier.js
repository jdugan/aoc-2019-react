import Computer from "../../../../lib/IntcodeComputer"

class BasicAmplifier {
  constructor(program, phase, id) {
    this.id       = id
    this.phase    = phase
    this.program  = program
  }

  run(signal, iteration = 0) {
    const computer = new Computer(this.program)
    const input    = [this.phase, signal]
    const status   = computer.run(input)
    if (status !== 0) {
      console.log(`Computer failed with exit code ${ status }.`)
    }

    return [computer.output, computer.halted]
  }
}

export default BasicAmplifier
