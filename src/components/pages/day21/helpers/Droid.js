import Computer  from "../../../../lib/IntcodeComputer"

class Droid {
  constructor(program) {
    this.program = program
  }

  // ========== ACTIONS ===================================

  calculateDamage(script) {
    const computer = new Computer([...this.program])
    const input    = this.convertScriptToAscii(script)

    const _        = computer.run(input)     // eslint-disable-line no-unused-vars
    const damage   = computer.output[computer.output.length - 1]
    const text     = this.convertAsciiToPrintable(computer.output)
    console.log(text)

    if (damage === 10) {
      return -1
    }
    return damage
  }

  // ========== UTILITIES =================================

  convertAsciiToPrintable(output) {
    const chars = output.map(n => {
      if (n < 256) {
        return String.fromCharCode(n)
      }
      return n
    })

    return chars.join('')
  }

  convertScriptToAscii(script) {
    const codes = script.map(cmd => {
      return cmd.split('').map(s => s.charCodeAt(0)).concat([10])
    })
    return codes.flat()
  }
}

export default Droid
