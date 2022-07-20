import Camera   from "./Camera"
import Computer from "../../../../lib/IntcodeComputer"

class Runner {
  constructor(program) {
    this.program = program
  }

  compute(part) {
    if (part === "1") {
      return this.alignmentSum()
    }
    return this.dustCollected()
  }

  // ========== RUNNERS ===================================

  alignmentSum() {
    const camera = new Camera([...this.program])
    camera.analyze()
    // camera.print()
    return camera.alignmentSum()
  }

  dustCollected() {
    // this.discoverPath()
    const cmds = [
      "A,B,A,B,C,C,B,A,B,C",
      "L,10,R,10,L,10,L,10",
      "R,10,R,12,L,12",
      "R,12,L,12,R,6",
      "n"
    ]
    const asciis = cmds.map(cmd => {
      return cmd.split('').map(s => s.charCodeAt(0)).concat([10])
    })
    const input = asciis.reduce((arr, cmd) => {
      arr = arr.concat(cmd)
      return arr
    }, [])
    const program  = [2].concat(this.program.slice(1))
    const computer = new Computer(program)
    computer.run(input)

    return computer.output.pop()
  }

  // ========== PRIVATE ===================================

  discoverPath() {
    const camera = new Camera([...this.program])
    camera.analyze()
    const path = camera.discoverPath()
    console.log(path)
  }
}

export default Runner
