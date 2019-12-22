import Computer from "../../../../lib/IntcodeComputer"
import Printer  from "../../../../lib/GridPrinter"
import Tile     from "./Tile"

class Game {
  constructor(program) {
    this.program  = program
    this.board    = {}

    this.ballId   = null
    this.paddleId = null
    this.score    = 0
  }

  // ========== PUBLIC ====================================

  play() {
    const program  = [2].concat(this.program.slice(1))
    const computer = new Computer(program, true)

    let   input = []
    let   args  = []
    let   final = 0
    let   count = 0
    let   iters = 0

    while (!computer.halted && iters < 25000) {
      const status = computer.run(input)
      if (status !== 0) {
        console.log(`Computer failed with exit code ${ status }.`)
      }

      if (!computer.halted) {
        count += 1
        args.push(computer.output.shift())

        if (count % 3 === 0) {
          iters += 1
          const cmdType  = this.getCommandType(...args)
          switch(cmdType) {
            case 'score':
              final = args[2]
              this.print(args[2], iters)
              if (this.blockCount() === 0) {
                computer.halted = true
              }
              break
            default:
              const tile = this.updateTile(...args)
              if (tile.isBall()) {
                this.updateBallId(tile)
              }
              if (tile.isPaddle()) {
                this.updatePaddleId(tile)
              }
              input = this.getInputFromPositions()
          }
          args = []
        }
      }
    }

    return final
  }

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

    return this.blockCount()
  }

  // ========== PRIVATE ===================================

  blockCount() {
    const blocks = Object.values(this.board).filter(t => t.isBlock())
    return blocks.length
  }

  getCommandType(x, y) {
    return (x === -1 && y === 0) ? 'score' : 'tile'
  }

  getInputFromPositions(nextId) {
    if (!this.ballId || !this.paddleId) {
      return [0]
    }
    const bx = this.ballId.split('|').map(Number)[0]
    const px = this.paddleId.split('|').map(Number)[0]
    const dx = bx - px
    if (dx === 0) {
      return [0]
    }
    return [(dx / Math.abs(dx))]
  }

  print(score, count) {
    const printer = new Printer(this.board, new Tile())
    printer.print()
    if (score) {
      console.log('-----------------------------------')
      console.log(`${ score } (${ count })`)
    }
    console.log('')
  }

  updateBallId(tile) {
    this.ballId = tile.id()
  }
  updatePaddleId(tile) {
    this.paddleId = tile.id()
  }
  updateTile(x, y, type) {
    const tile = new Tile(x, y, type)
    this.board[tile.id()] = tile
    return tile
  }
}

export default Game
