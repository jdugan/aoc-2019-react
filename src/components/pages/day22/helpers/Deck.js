import NumbersLogic from 'numbers-logic'

class Deck {
  constructor(size = 10n) {
    this.size = size
  }

  // ========== PUBLIC ====================================

  getBackwardCommands(commands, invert) {
    const cmds = this._parseCommands(commands)

    return this._invertCommands(cmds)
  }

  getForwardCommands(commands, invert) {
    return this._parseCommands(commands)
  }

  // ========== PRIVATE (PARSING) =========================

  _getShuffleFnInput(fnName, rawInput, invert) {
    let input = parseInt(rawInput)
    if (!isNaN(input)) {
      input = BigInt(input)                       // eslint-disable-line
    }

    switch (fnName) {
      case "_forwardCut":
        return (this.size + input) % this.size    // coerce to positive
      case "_forwardIncrement":
        return input                              // always positive
      default:
        return null                               // always null
    }
  }

  _getShuffleFnName(text) {
    const fnMap = {
      "cut":                 "_forwardCut",
      "deal into new stack": "_forwardNew",
      "deal with increment": "_forwardIncrement",
    }
    return fnMap[text]
  }

  // ========== PRIVATE (CONVERSION) ======================

  _invertCommands(commands) {
    const cmds = []

    commands.reverse().forEach(cmd => {
      cmds.push({
        name:  cmd.name.replace("forward", "backward"),
        input: cmd.input
      })
    })

    return cmds
  }

  _parseCommands(commands) {
    const regex = /(deal into new stack|deal with increment|cut)\s?(-?\d*)/
    const cmds  = []

    commands.forEach(raw => {
      const [cmdText, cmdInput] = raw.match(regex).slice(1,3)
      const fnName      = this._getShuffleFnName(cmdText)
      const fnInput     = this._getShuffleFnInput(fnName, cmdInput)

      cmds.push({ name: fnName, input: fnInput })
    })

    return cmds
  }

  // ========== PRIVATE (SHUFFLE > FORWARD) ===============

  _forwardCut(cut) {
    return [1n, this.size - cut]
  }

  _forwardIncrement(increment) {
    return [increment, 0n]
  }

  _forwardNew() {
    return [-1n, this.size - 1n]
  }

  // ========== PRIVATE (SHUFFLE > BACKWARD) ==============

  _backwardCut(cut) {
    cut = (this.size + cut) % this.size
    return [1n, cut]
  }

  _backwardIncrement(increment) {
    increment = NumbersLogic.inverseMod(parseInt(increment), parseInt(this.size))
    increment = BigInt(increment)   // eslint-disable-line

    return [increment, 0n]
  }

  _backwardNew(_) {
    return [-1n, this.size - 1n]
  }
}

export default Deck
