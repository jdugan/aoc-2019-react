import Deck from "./Deck"

class Runner {
  constructor(commands) {
    this.commands = commands
  }

  compute(part, env) {
    if (part === "1") {
      return this.shuffleAndPickCard(env)
    }
    return 2
  }

  // ========== RUNNERS ===================================

  shuffleAndPickCard(env) {
    const size = (env === 'test') ? 10 : 10007
    const card = (env === 'test') ? 3  : 2019

    const deck = new Deck(size)
    deck.shuffle([...this.commands])
    console.log(deck.cards)
    return deck.getPositionOfCard(card)
  }
}
export default Runner
