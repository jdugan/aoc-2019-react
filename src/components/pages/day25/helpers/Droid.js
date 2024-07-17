import Computer from "../../../../lib/IntcodeComputer"

class Droid {
  constructor(program) {
    this.computer = new Computer([...program], true)
  }

  // ========== ACTIONS ===================================

  explore(commands = []) {
    this.performCommand("")
    commands.forEach(cmd => {
      this.performCommand(cmd)
    })
  }

  passCheckpoint(cmd) {
    const inventory = this.performCommand("inv")
    const items     = this.parseItemsFromOutput(inventory)
    const password  = this.findItemPermuation(items, cmd)

    return password
  }

  // ========== ITEMS =====================================

  buildBinaryItemHash(items) {
    const hash = {}
    items.forEach((item, index) => {
      hash[2 ** index] = item
    })
    return hash
  }

  dropAllItems(items) {
    items.forEach(item => {
      this.performCommand(`drop ${ item }`)
    })
  }

  findItemPermuation(items, cmd) {
    const hash = this.buildBinaryItemHash(items)
    const size = 2 ** items.length
    let   pwd

    for (let i=0; i < size; i++) {
      const binaryInts = i.toString(2).split('').map(n => parseInt(n))
      const binaryArr  = [0,0,0,0,0,0,0,0].concat(binaryInts).reverse().slice(0,8).reverse()
      const permItems  = []
      binaryArr.forEach((bit, index) => {
        const k = (2 ** index) * bit
        if (k > 0) {
          permItems.push(hash[k])
        }
      })

      this.dropAllItems(items)
      permItems.forEach(item => {
        this.performCommand(`take ${ item }`)
      })
      const scanResult = this.performCommand(cmd)

      const pwdMatch = scanResult.match(/get in by typing (\d+) on the keypad/)
      if (pwdMatch) {
        pwd = pwdMatch[1]
        break
      }
    }

    return pwd
  }

  parseItemsFromOutput(output) {
    let   items     = []
    const itemMatch = output.match(/Items in your inventory:\n([-\sa-z]*)\n\n/)
    if (itemMatch) {
      items = itemMatch[1].split("\n").map(s => s.replace("- ", ""))
    }
    return items
  }

  // ========== COMPUTER ==================================

  performCommand(cmd) {
    const terminus   = [63,100,110,97,109,109,111,67].join(",")
    const input      = this.convertCommandToAscii(cmd)
    const output     = []
    let   processing = true

    while (processing) {
      this.computer.run(input)
      const code = this.computer.output.shift()
      output.unshift(code)

      if (output.slice(0, 8).join(",") === terminus || output.length > 5000) {
        processing = false
      }
    }

    const formatted = this.convertAsciiToPrintable(output.reverse())
    // console.log(formatted)

    return formatted
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

  convertCommandToAscii(cmd) {
    return cmd.toString().split('').map(s => s.charCodeAt(0)).concat([10])
  }
}

export default Droid
