import Computer from "../../../../lib/IntcodeComputer"
import Panel    from "./HullPanel"

class Robot {
  constructor(program, location = new Panel(0, 0), direction = "north") {
    this.program   = program
    this.location  = location
    this.direction = direction

    this.panels = {}
  }

  // ========== PUBLIC ====================================

  registrationTag() {
    this.execute()
    this.print()
    return "see console"
  }
  squaresPainted() {
    this.execute()
    return Object.keys(this.panels).length
  }

  // ========== PRIVATE ===================================

  execute() {
    const computer = new Computer([...this.program], true)
    const steps    = ["getMoveMethod", "getPaintMethod"]
    let   input    = [this.location.getColor()]
    let   count    = 0

    while (!computer.halted) {
      const status = computer.run(input)
      if (status !== 0) {
        console.log(`Computer failed with exit code ${ status }.`)
      }

      if (!computer.halted) {
        count += 1
        const cmd        = computer.output.shift()
        const stepMethod = steps[count % 2]
        const method     = this[stepMethod](cmd)
        this[method]()

        input = [this.location.getColor()]
      }
    }
  }

  print() {
    const rows = []
    Object.entries(this.panels).forEach(([id, p]) => {
      const [x, y] = id.split('|').map(s => Math.abs(parseInt(s)))
      if (rows[y] === undefined) {
        rows[y] = []
      }
      rows[y][x] = p
    })

    rows.forEach(row => {
      const filled = row.map(col => {
        return col || new Panel(0, 0)
      })
      console.log(filled.map(p => p.render()).join(''))
    })
  }

  // ========== PRIVATE ===================================

  getMoveMethod(cmd) {
    return (cmd) ? "moveRight" : "moveLeft"
  }
  getPaintMethod(cmd) {
    return (cmd) ? "paintWhite" : "paintBlack"
  }

  move() {
    const method  = `${ this.direction }Id`
    const nextId  = this.location[method]()
    let   panel   = this.panels[nextId]
    if (!panel) {
      const [x, y]        = nextId.split('|').map(s => parseInt(s))
      panel               = new Panel(x, y)
    }
    this.location = panel
  }

  moveLeft() {
    this.turnLeft()
    this.move()
  }
  moveRight() {
    this.turnRight()
    this.move()
  }

  paintBlack() {
    this.location.setColor(0)
    const id = this.location.id()
    this.panels[id] = this.location
  }
  paintWhite() {
    this.location.setColor(1)
    const id = this.location.id()
    this.panels[id] = this.location
  }

  turnLeft() {
    switch (this.direction) {
      case "north":
        this.direction = "west"
        break
      case "south":
        this.direction = "east"
        break
      case "east":
        this.direction = "north"
        break
      default:
        this.direction = "south"
    }
  }
  turnRight() {
    switch (this.direction) {
      case "north":
        this.direction = "east"
        break
      case "south":
        this.direction = "west"
        break
      case "east":
        this.direction = "south"
        break
      default:
        this.direction = "north"
    }
  }
}
export default Robot
