import Computer from "../../../../lib/IntcodeComputer"
import Panel    from "./HullPanel"

class Robot {
  constructor(program, location = new Panel(0, 0), direction = "north") {
    this.program   = program
    this.location  = location
    this.direction = direction

    this.panels    = {}
  }

  // ========== PUBLIC ====================================

  squaresPainted() {
    this.execute()
    console.log(Object.keys(this.panels).length)
    return Object.keys(this.panels).length
  }

  // ========== PRIVATE ===================================

  execute() {
    const commands = this.getCommands()
    commands.forEach((cmd, index) => {
      const [color, turn] = cmd
      const paintMethod   = (color) ? "paintWhite" : "paintBlack"
      const turnMethod    = (turn)  ? "turnRight"  : "turnLeft"

      this[paintMethod]()
      this[turnMethod]()
      this.move()
    })

  }

  // ========== PRIVATE ===================================

  getCommands() {
    const commands = []
    const computer = new Computer([...this.program], true)
    let   input    = [this.location.getColor()]
    let   output   = []

    while (!computer.halted) {
      const status = computer.run(input)
      if (status !== 0) {
        console.log(`Computer failed with exit code ${ status }.`)
      }

      output.push(computer.output)
      if (output.length === 2) {
        commands.push([...output])
        output = []
      }
    }

    return commands
  }

  move() {
    const method  = `${ this.direction }Id`
    const nextId  = this.location[method]()
    let   panel = this.panels[nextId]
    if (!panel) {
      const [x, y]  = nextId.split('|').map(s => parseInt(s))
      panel         = new Panel(x, y)
    }
    this.location = panel
  }

  paintBlack() {
    const id = this.location.id()
    this.panels[id] = this.location
  }
  paintWhite() {
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
