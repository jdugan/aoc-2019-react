import Deck from "./Deck"

class Runner {
  constructor(commands) {
    this.commands = commands
  }

  compute(part, env) {
    if (part === "1") {
      return this.simpleRun(env)
    }
    return this.recursiveRun(env)
  }

  // ========== RUNNERS ===================================

  recursiveRun(env) {
    const size = (env === 'test') ? 10 : 119315717514047
    const iter = (env === 'test') ? 3  : 1
    const pos  = (env === 'test') ? 3  : 2020
    const deck = new Deck(size)
    for (let i = 0; i < iter; i++) {
      deck.shuffle([...this.commands])
    }
    console.log(deck.cards)
    return deck.getCardAt(pos)
  }

  simpleRun(env) {
    const size = (env === 'test') ? 10 : 10007
    const card = (env === 'test') ? 3  : 2019
    const deck = new Deck(size)
    deck.shuffle([...this.commands])
    return deck.getPositionFor(card)
  }
}
export default Runner
