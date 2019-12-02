class IntcodeComputer {
  constructor(data = [], config = {}) {
    this.data   = data
    this.config = config
  }

  run() {
    return 0
  }


  config() {
    throw new Error("A config method must be implemented")
  }
}

export default IntcodeComputer
