class IntcodeComputer {
  constructor(program = [], pausable = false) {
    this.program  = program
    this.pausable = pausable

    this.modes = {
      0:  { in: 'renderPositionInMode',  out: 'renderPositionOutMode'  },
      1:  { in: 'renderImmediateInMode', out: 'renderImmediateOutMode' },
      2:  { in: 'renderRelativeInMode',  out: 'renderRelativeOutMode'  },
    }
    this.opcodes = {
      1:  { method: 'performAdd',       operands: ["in", "in", "out"] },
      2:  { method: 'performMultiply',  operands: ["in", "in", "out"] },
      3:  { method: 'performInput',     operands: ["out"]             },
      4:  { method: 'performOutput',    operands: ["in"]              },
      5:  { method: 'performJumpTrue',  operands: ["in", "in"]        },
      6:  { method: 'performJumpFalse', operands: ["in", "in"]        },
      7:  { method: 'performLessThan',  operands: ["in", "in", "out"] },
      8:  { method: 'performEquals',    operands: ["in", "in", "out"] },
      9:  { method: 'performRelative',  operands: ["in"]              },
      99: { method: 'performHalt',      operands: []                  },
    }

    this.pointer      = 0
    this.relativeBase = 0
    this.paused       = false
    this.halted       = false
  }

  run(input = []) {
    if (!this.halted) {
      if (!this.paused) {
        this.pointer = 0
      }
      this.output = []
      this.paused = false

      while (!this.paused && !this.halted && this.pointer < this.program.length) {
        const operator     = this.program[this.pointer].toString()
        const instruction  = this.buildInstruction(operator)

        const method       = instruction.method
        const operands     = instruction.operands

        const offset  = this[method](operands, input)
        this.pointer += offset
      }
    }

    return 0
  }

  // ========== HELPERS ===================================

  buildInstruction(operator) {
    const opArray  = operator.split('').map(i => parseInt(i)).reverse()
    const opCode   = parseInt(opArray.slice(0, 2).reverse().join(''))
    const opConfig = this.opcodes[opCode]

    if (!opConfig) {
      return {}
    }

    const method = opConfig.method

    const operandLen   = opConfig.operands.length
    const operandStart = this.pointer + 1
    const operandEnd   = operandStart + operandLen
    const operandAddrs = this.program.slice(operandStart, operandEnd)
    const operandModes = opArray.slice(2, 2 + operandLen)
    const operands     = opConfig.operands.map((type, i) => {
      const mode    = operandModes[i] || 0
      const param   = operandAddrs[i]
      const method  = (this.modes[mode] || {})[type] || "renderPositionInMode"
      return this[method](param)
    })

    return {
      method:   method,
      operands: operands,
    }
  }

  // ========== MODES =====================================

  renderImmediateInMode(value) {
    return value
  }
  renderImmediateOutMode(value) {
    console.log("ERROR => Invalid parameter mode called")
    return value
  }

  renderPositionInMode(value) {
    if (value < 0) {
      value = this.program.length - value
    }
    return this.program[value] || 0
  }
  renderPositionOutMode(value) {
    return value
  }

  renderRelativeInMode(value) {
    value = this.relativeBase + value
    return this.renderPositionInMode(value)
  }
  renderRelativeOutMode(value) {
    return this.relativeBase + value
  }

  // ========== OPCODES ===================================

  performAdd(operands) {
    const writeAddress = operands.pop()
    this.program[writeAddress] = operands.reduce((sum, i) => sum = sum + i, 0)
    return 4
  }

  performMultiply(operands) {
    const writeAddress = operands.pop()
    this.program[writeAddress] = operands.reduce((product, i) => product = product * i, 1)
    return 4
  }

  performInput(operands, input) {
    const writeAddress = operands.shift()
    this.program[writeAddress] = input.shift()
    return 2
  }

  performOutput(operands) {
    this.output.push(operands.shift())
    if (this.pausable) {
      this.paused = true
    }
    return 2
  }

  performJumpTrue(operands) {
    this.pointer = (operands[0] !== 0) ? operands[1] : this.pointer + 3
    return 0
  }

  performJumpFalse(operands) {
    this.pointer = (operands[0] === 0) ? operands[1] : this.pointer + 3
    return 0
  }

  performLessThan(operands) {
    const writeAddress = operands.pop()
    this.program[writeAddress] = (operands[0] < operands[1]) ? 1 : 0
    return 4
  }

  performEquals(operands) {
    const writeAddress = operands.pop()
    this.program[writeAddress] = (operands[0] === operands[1]) ? 1 : 0
    return 4
  }

  performRelative(operands) {
    this.relativeBase += operands.shift()
    return 2
  }

  performHalt() {
    this.halted = true
    return 0
  }
}

export default IntcodeComputer
