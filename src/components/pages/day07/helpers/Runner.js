import ArrayUtil         from "../../../../util/Arrays"
import BasicAmplifier    from "./BasicAmplifier"
import FeedbackAmplifier from "./FeedbackAmplifier"

class Runner {
  constructor(program) {
    this.program = program
  }

  compute(part) {
    if (part === "1") {
      return this.highestOutput([0,1,2,3,4], 'basic')
    }
    return this.highestOutput([5,6,7,8,9], 'feedback')
  }

  // ========== RUNNERS ===================================

  highestOutput(phaseBase, amplifierType) {
    const phaseSets  = ArrayUtil.toPermutations(phaseBase)
    let   highest    = 0

    phaseSets.forEach(phases => {
      const amps   = this.getAmplifiers(phases, amplifierType)
      let   signal = 0

      const output = this.processAmplifierLoop(amps, signal)

      if (output > highest) {
        highest = output
      }
    })

    return highest
  }

  // ========== HELPERS ===================================

  getAmplifiers(phases, type) {
    const klass = (type === 'feedback') ? FeedbackAmplifier : BasicAmplifier
    let   amps  = []

    for(let i = 0; i < 5; i++) {
      const program = [...this.program]
      const amp     = new klass(program, phases[i], i + 1)
      amps.push(amp)
    }
    return amps
  }

  processAmplifierLoop(amps, signal, iteration = 1) {
    let halted
    amps.forEach(amp => {
      [signal, halted] = amp.run(signal, iteration)
    })
    if (!halted) {
      if (iteration < 50) {
        iteration += 1
        const deepSignal = this.processAmplifierLoop(amps, signal, iteration)
        return deepSignal || signal // halt returns undefined, so use previous signal
      }
    }
    return signal
  }
}
export default Runner
