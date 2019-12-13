import Computer from "../../../../lib/IntcodeComputer"
import Tile     from "./Tile"

class Game {
  constructor(program) {
    this.program = program
    this.board   = {}
  }

  // ========== PUBLIC ====================================

  blockCount() {
    const blocks = Object.values(this.board).filter(t => t.isBlock())
    return blocks.length
  }

  // ========== PRIVATE ===================================
  
  setup() {
    const computer = new Computer([...this.program], true)
    let   args  = []
    let   count = 0

    while (!computer.halted) {
      const status = computer.run()
      if (status !== 0) {
        console.log(`Computer failed with exit code ${ status }.`)
      }

      if (!computer.halted) {
        count += 1
        args.push(computer.output.shift())

        if (count % 3 === 0) {
          const tile = new Tile(...args)
          this.board[tile.id()] = tile
          args = []
        }
      }
    }
  }
}

export default Game
