class IntcodeComputer {
  constructor(program = [], pausable = false) {
    this.program  = program
    this.pausable = pausable

    this.pointer  = 0
    this.output   = 0
    this.paused   = false
    this.halted   = false
  }

  run(input = []) {
    if (!this.halted) {
      if (!this.paused) {
        this.pointer = 0
      }
      this.paused = false

      while (!this.paused && !this.halted && this.pointer < this.program.length) {
        const operator     = this.program[this.pointer].toString()
        const instruction  = this.buildInstruction(operator)
        const opcode       = instruction.opcode
        const operands     = [...instruction.operands]
        const writeAddress = instruction.writeAddress

        switch (opcode) {
          case 'add':
            this.program[writeAddress] = operands.reduce((sum, i) => sum = sum + i, 0)
            this.pointer += 4
            break
          case 'multiply':
            this.program[writeAddress] = operands.reduce((product, i) => product = product * i, 1)
            this.pointer += 4
            break
          case 'input':
            this.program[writeAddress] = input.shift()
            this.pointer += 2
            break
          case 'output':
            this.output   = operands[0]
            this.pointer += 2
            if (this.pausable) {
              this.paused = true
            }
            break
          case 'jump-true':
            this.pointer = (operands[0] !== 0) ? operands[1] : this.pointer + 3
            break
          case 'jump-false':
            this.pointer = (operands[0] === 0) ? operands[1] : this.pointer + 3
            break
          case 'less-than':
            this.program[writeAddress] = (operands[0] < operands[1]) ? 1 : 0
            this.pointer += 4
            break
          case 'equals':
            this.program[writeAddress] = (operands[0] === operands[1]) ? 1 : 0
            this.pointer += 4
            break
          case 'halt':
            this.halted = true
            break
          default:
            console.log(this.program)
            console.log(this.pointer)
            console.log(opcode)
            return 1
        }
      }
    }

    return 0
  }

  // ========== HELPERS ===================================

  buildInstruction(operator) {
    const opArray  = operator.split('').map(i => parseInt(i)).reverse()
    const opCode   = parseInt(opArray.slice(0, 2).reverse().join(''))
    const opConfig = this.getConfig().opcodes[opCode]

    if (!opConfig) {
      return {}
    }

    const opcode = opConfig.method

    const operandStart = this.pointer + 1
    const operandEnd   = operandStart + opConfig.operands
    const operandAddrs = this.program.slice(operandStart, operandEnd)
    const operandModes = opArray.slice(2, 2 + opConfig.operands)
    const operands     = operandAddrs.map((pv, i) => {
      const mode = operandModes[i] || 0
      let   val
      switch (mode) {
        case 1:
          val = pv
          break
        default:
          if (pv < 0) {
            pv = this.program.length - pv
          }
          val = this.program[pv]
      }
      return val
    })

    const writeAddress = this.program[this.pointer + operands.length + 1]

    return {
      opcode:       opcode,
      operands:     operands,
      writeAddress: writeAddress
    }
  }

  getConfig() {
    return {
      opcodes: {
         1: { method: 'add',        operands: 2 },
         2: { method: 'multiply',   operands: 2 },
         3: { method: 'input',      operands: 0 },
         4: { method: 'output',     operands: 1 },
         5: { method: 'jump-true',  operands: 2 },
         6: { method: 'jump-false', operands: 2 },
         7: { method: 'less-than',  operands: 2 },
         8: { method: 'equals',     operands: 2 },
        99: { method: 'halt',       operands: 0 },
      }
    }
  }
}

export default IntcodeComputer
