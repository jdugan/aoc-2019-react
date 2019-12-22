import Receiver from "./Receiver"

class Runner {
  constructor(data) {
    this.data  = data
  }

  compute(part, env) {
    if (part === "1") {
      return this.simpleRun(100)
    }
    return this.recursiveRun(10000, 100)
  }

  // ========== RUNNERS ===================================

  recursiveRun(repeat, phases) {
    const offset   = parseInt(this.data.slice(0, 7))
    const data     = Array(repeat).fill(this.data).join('').slice(offset).split('')
    const receiver = new Receiver(data)
    for (let i = 0; i <= phases; i++) {
      receiver.transformBackward()
    }
    return parseInt(receiver.output.slice(0, 8).join(''))
  }

  simpleRun(phases) {
    const receiver = new Receiver(this.data.split(''))
    for (let i = 0; i < phases; i++) {
      receiver.transformForward()
    }
    return parseInt(receiver.output.slice(0, 8).join(''))
  }

}
export default Runner
