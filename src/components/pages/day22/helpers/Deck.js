class Deck {
  constructor(size = 10) {
    this.cards = Array(size).fill(0).map((v, i) => i)
  }

  // ========== PUBLIC ====================================

  getPositionOfCard(card) {
    return this.cards.indexOf(card)
  }

  shuffle(commands) {
    const regex = /(deal into new stack|deal with increment|cut)\s?(-?\d*)/
    commands.forEach(raw => {
      const [rawMethod, rawInput] = raw.match(regex).slice(1,3)
      const method = this.getShuffleMethod(rawMethod)
      const input  = (rawInput === "") ? null : parseInt(rawInput)
      this[method](input)
    })
  }

  // ========== PRIVATE ===================================

  getShuffleMethod(raw) {
    const map = {
      "cut":                 "shuffleCut",
      "deal into new stack": "shuffleReverse",
      "deal with increment": "shuffleIncrement",
    }
    return map[raw]
  }

  shuffleCut(index) {
    const temp = [...this.cards]
    const tail = temp.slice(0, index)
    const head = temp.slice(index)
    this.cards = head.concat(tail)
  }

  shuffleIncrement(increment) {
    const map  = this.cards.reduce((hash, card, i) => {
      hash[i] = card
      return hash
    }, {})
    const size  = this.cards.length
    const temp  = Array(size)
    let   iIndex = 0
    let   oIndex = 0
    while (iIndex < size) {
      temp[oIndex] = map[iIndex]

      iIndex = iIndex + 1
      oIndex = (oIndex + increment) % size
    }
    this.cards = temp
  }

  shuffleReverse() {
    const temp = [...this.cards]
    this.cards = temp.reverse()
  }
}

export default Deck
