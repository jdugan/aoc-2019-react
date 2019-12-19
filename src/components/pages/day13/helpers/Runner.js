import Game from "./Game"

class Runner {
  constructor(program) {
    this.game = new Game(program)
  }

  compute(part) {
    if (part === "1") {
      return this.game.setup()
    }
    return this.game.play()
  }
}
export default Runner
