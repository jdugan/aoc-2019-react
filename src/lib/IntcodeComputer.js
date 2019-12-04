import ArrayUtil from "../util/Arrays"

class IntcodeComputer {
  constructor(list = []) {
    this.list = list
  }

  run() {
    const config       = this.getConfig()
    const maxCount     = config.maxCount || 1000
    const opcodeDefs   = config.opcodes || {}

    let   count        = 0
    let   instrPtr     = 0
    const memory       = ArrayUtil.toHash(this.list)
    let   opcode       = memory[instrPtr]
    const validOpcodes = Object.keys(opcodeDefs).map(i => parseInt(i))

    while (validOpcodes.includes(opcode) && count < maxCount) {
      count = count + 1

      const ocConfig  = opcodeDefs[opcode]
      const ocMethod  = ocConfig.method
      const ocLength  = ocConfig.length
      const addresses = []
      for (let i = 1; i <= ocLength; i++) {
        addresses.push(memory[instrPtr + i])
      }

      switch (ocMethod) {
        case 'add':
          memory[addresses[2]] = memory[addresses[0]] + memory[addresses[1]]
          break
        case 'multiply':
          memory[addresses[2]] = memory[addresses[0]] * memory[addresses[1]]
          break
        default:
          // noop
      }

      instrPtr += ocLength + 1
      opcode = memory[instrPtr]
    }

    return memory[0]
  }

  // ========== HELPERS ===================================

  getConfig() {
    return {
      maxCount: 1000,
      opcodes: {
        1: { method: 'add',      length: 3 },
        2: { method: 'multiply', length: 3 }
      }
    }
  }
}

export default IntcodeComputer
