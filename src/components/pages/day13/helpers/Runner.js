import Game from "./Game"

class Runner {
  constructor(program) {
    this.game = new Game(program)

    this.game.setup()
  }

  compute(part) {
    if (part === "1") {
      return this.game.blockCount()
    }
    return this.game.play()
  }
}
export default Runner
