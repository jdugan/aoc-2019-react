import Droid from './Droid'

class Runner {
  constructor(program) {
    this.program = program
  }

  compute(part) {
    if (part === "1") {
      return this.calculateDamageByWalking()
    }
    return this.calculateDamageByRunning()
  }

  // ========== RUNNERS ===================================

  calculateDamageByRunning() {
    const droid  = new Droid([...this.program])
    const script = this.getRunningScript()

    return droid.calculateDamage(script)
  }

  calculateDamageByWalking() {
    const droid  = new Droid([...this.program])
    const script = this.getWalkingScript()

    return droid.calculateDamage(script)
  }

  // ========== INPUTS ====================================

  getRunningScript() {
    return [
      // ----------
      "NOT B T",
      "NOT C J",
      "OR T J",         // gap exists
      // ----------
      "AND D J",        // can land jump
      // ----------
      "AND H J",        // can land another jump (if needed)
      // ----------
      "NOT A T",
      "OR T J",         // have to jump
      // ----------
      "RUN"
    ]
  }

  getWalkingScript() {
    return [
      // ----------
      "NOT B T",
      "NOT C J",
      "OR T J",         // gap exists
      // ----------
      "AND D J",        // can land jump
      // ----------
      "NOT A T",
      "OR T J",         // have to jump
      // ----------
      "WALK"
    ]
  }
}
export default Runner
