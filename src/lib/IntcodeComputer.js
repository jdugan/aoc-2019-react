class IntcodeComputer {
  constructor(program = []) {
    this.program = program
    this.output  = []
    this.result  = 0
  }

  run(input) {
    this.output = []
    this.result = 0

    const program  = this.program.map(i => i)
    const maxCount = program.length
    let   halted   = false
    let   count    = 0
    let   pointer  = 0

    while (!halted && count < maxCount) {
      count = count + 1

      const operator     = program[pointer].toString()
      const instruction  = this.buildInstruction(program, operator, pointer)
      const opcode       = instruction.opcode
      const operands     = instruction.operands
      const writeAddress = instruction.writeAddress

      switch (opcode) {
        case 'add':
          program[writeAddress] = operands.reduce((sum, i) => sum = sum + i, 0)
          pointer += 4
          break
        case 'multiply':
          program[writeAddress] = operands.reduce((product, i) => product = product * i, 1)
          pointer += 4
          break
        case 'input':
          program[writeAddress] = input
          pointer += 2
          break
        case 'output':
          this.output.push(operands[0])
          pointer += 2
          break
        case 'jump-true':
          pointer = (operands[0] !== 0) ? operands[1] : pointer + 3
          break
        case 'jump-false':
          pointer = (operands[0] === 0) ? operands[1] : pointer + 3
          break
        case 'less-than':
          program[writeAddress] = (operands[0] < operands[1]) ? 1 : 0
          pointer += 4
          break
        case 'equals':
          program[writeAddress] = (operands[0] === operands[1]) ? 1 : 0
          pointer += 4
          break
        case 'halt':
          halted = true
          break
        default:
          console.log(program)
          console.log(pointer)
          console.log(opcode)
          return 1
      }
    }

    this.result = program[0]

    return 0
  }

  // ========== HELPERS ===================================

  buildInstruction(program, operator, pointer) {
    const opArray  = operator.split('').map(i => parseInt(i)).reverse()
    const opCode   = parseInt(opArray.slice(0, 2).reverse().join(''))
    const opConfig = this.getConfig().opcodes[opCode]

    if (!opConfig) {
      return {}
    }

    const opcode = opConfig.method

    const operandStart = pointer + 1
    const operandEnd   = operandStart + opConfig.operands
    const operandAddrs = program.slice(operandStart, operandEnd)
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
            pv = program.length - pv
          }
          val = program[pv]
      }
      return val
    })

    const writeAddress = program[pointer + operands.length + 1]

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
