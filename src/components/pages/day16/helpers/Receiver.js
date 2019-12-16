// import ArrayUtil from "../../../../util/Arrays"

class Receiver {
  constructor(data) {
    this.output  = [...data]
    this.pattern = [0, 1, 0, -1]
  }

  // ========== PUBLIC ====================================

  transformBackward() {
    const input = this.output
    let   sum    = 0
    for (let i = input.length - 1; i >= 0; i--) {
      sum = (sum + input[i]) % 10
      this.output[i] = sum
    }
  }

  transformForward() {
    const input  = this.output
    const output = input.map((val, i) => {
      return this.translate(input, i)
    })
    this.output = output
  }

  // ========== PRIVATE ===================================

  translate(list, repeat) {
    let factor
    const total = list.reduce((sum, val, i) => {
      factor = this.getPatternFactor(i, repeat)
      if (factor !== 0) {
        sum = sum + (val * factor)
      }
      return sum
    }, 0)
    return Math.abs(total) % 10
  }

  getPatternFactor(listIndex, repeatIndex) {
    const repeatFactor = repeatIndex + 1
    const patternLen   = this.pattern.length
    const sequenceLen  = patternLen * repeatFactor
    const reducedIndex = (listIndex + 1) % sequenceLen
    const groupIndex   = Math.floor(reducedIndex / repeatFactor)
    if (groupIndex === patternLen) {
      return this.pattern[0]
    } else {
      return this.pattern[groupIndex]
    }
  }
}

export default Receiver
