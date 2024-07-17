import Computer from "../../../../lib/IntcodeComputer"

class NetworkController {
  constructor(address, program, publishFn) {
    const fns = this._buildOpcodeFns()

    this.address  = address
    this.computer = new Computer([...program], true, fns)
    this.queue    = [address]
    this.idle     = false
  }

  // ========== ACTIONS ===================================

  run() {
    this.computer.run()
    return this.computer.output
  }

  // ========== OPCODE OVERRIDES ==========================

  _buildOpcodeFns() {
    const self     = this
    const inputFn  = function(computer, operands) {
      return self._receiveInput(computer, operands)
    }
    const outputFn = function(computer, operands) {
      return self._sendOutput(computer, operands)
    }

    return { input: inputFn, output: outputFn }
  }

  _receiveInput(computer, operands) {
    const addr  = operands.shift()
    const value = (this.queue.length) ? this.queue.shift() : -1

    if (value === -1) {
      if (this.idle) {
        computer.paused = true
      } else {
        this.idle = true
      }
    } else {
      this.idle = false
    }

    computer.program[addr] = value
    return 2
  }

  _sendOutput(computer, operands) {
    computer.output.push(operands.shift())
    if (computer.output.length === 3) {
      computer.paused = true
    }
    return 2
  }
}

export default NetworkController
