import Deck from "./Deck"

class Runner {
  constructor(commands) {
    this.commands = commands
  }

  compute(part, env) {
    if (part === "1") {
      return this.forwardShuffle(env)
    }
    return this.backwardShuffle(env)
  }

  // ========== RUNNERS ===================================

  backwardShuffle(env) {
    const size = (env === 'test') ? 10n : 119315717514047n
    const iter = (env === 'test') ? 1n  : 101741582076661n
    const pos  = (env === 'test') ? 8n  : 2020n

    const deck = new Deck(size)
    const cmds = deck.getBackwardCommands([...this.commands])

    return this._shuffle(deck, cmds, iter, pos)
  }

  forwardShuffle(env) {
    const size = (env === 'test') ? 10n : 10007n
    const iter = (env === 'test') ? 1n  : 1n
    let   pos  = (env === 'test') ? 3n  : 2019n

    const deck = new Deck(size)
    const cmds = deck.getForwardCommands([...this.commands])

    return this._shuffle(deck, cmds, iter, pos)
  }

  // ========== PRIVATE ===================================

  raiseCoefficients(a, b, power, size) {
    if (power == 0n) {
      return [1n, 0n]
    }
    else if (power % 2n == 0n) {
      const a1 = (a * a) % size
      const b1 = (a * b + b) % size
      const p1 = power / 2n
      return this.raiseCoefficients(a1, b1, p1, size)
    }
    else {
      const p2  = power - 1n
      const fs2 = this.raiseCoefficients(a, b, p2, size)
      const a2  = (a * fs2[0]) % size
      const b2  = (a * fs2[1] + b) % size
      return [a2, b2]
    }
  }

  _shuffle(deck, cmds, iter, pos) {
    let a = 1n
    let b = 0n

    // calculate coefficients for one loop
    for (let i = 0; i < cmds.length; i++) {
      const fnName  = cmds[i].name
      const fnInput = cmds[i].input
      const factors = deck[fnName](fnInput)
      const a1      = factors[0]
      const b1      = factors[1]

      a = (a * a1) % deck.size
      b = (a1 * b + b1) % deck.size
    }

    // calculate coefficients for multiple loops
    const fs = this.raiseCoefficients(a, b, iter, deck.size)
    const a2 = fs[0]
    const b2 = fs[1]
    const v  = ((a2 * pos) + b2) % deck.size

    // force positive
    return ((v + deck.size) % deck.size).toString()
  }

}
export default Runner
