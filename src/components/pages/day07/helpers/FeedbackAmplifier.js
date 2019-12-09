import Computer from "../../../../lib/IntcodeComputer"

class FeedbackAmplifier {
  constructor(program, phase, id) {
    this.id       = id
    this.phase    = phase
    this.program  = program
    this.computer = new Computer([...program], true)
  }

  run(signal, iteration = 0) {
    const input    = (this.phase) ? [this.phase, signal] : [signal]
    const status   = this.computer.run(input)
    if (status !== 0) {
      console.log(`Computer failed with exit code ${ status }.`)
    }

    this.phase = null

    return [this.computer.output.pop(), this.computer.halted]
  }
}

export default FeedbackAmplifier
