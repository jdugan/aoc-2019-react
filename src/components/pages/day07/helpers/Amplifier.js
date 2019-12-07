import Computer from "../../../../lib/IntcodeComputer"

class Amplifier {
  constructor(program, phase, id) {
    this.id       = id
    this.phase    = phase
    this.program  = program
    this.computer = new Computer([...program])
  }

  run(signal, iteration = 0) {
    const input    = (this.phase) ? [this.phase, signal] : [signal]
    const status   = this.computer.run(input, false)
    if (status !== 0) {
      console.log(`Computer failed with exit code ${ status }.`)
    }

    this.phase = null

    return [this.computer.output, this.computer.halted]
  }
}

export default Amplifier
