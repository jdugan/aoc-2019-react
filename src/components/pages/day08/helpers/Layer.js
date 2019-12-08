import Pixel from "../../../../lib/GridPoint"

class Layer {
  constructor(width, height, data) {
    this.data   = data
    this.height = height
    this.width  = width

    this.counts = {}
    this.grid   = {}

    this.processData()
  }

  // ========== PUBLIC ====================================

  countDigit(digit) {
    return this.counts[digit] || 0
  }

  // ========== PRIVATE ===================================

  processData() {
    const digits = this.data.split('').map(i => parseInt(i))

    for (let y = 0; y > -this.height; y--) {
      for (let x = 0; x < this.width; x++) {
        const digit = digits.shift()

        this.registerDigitCount(digit)
        this.registerPixel(x, y, digit)
      }
    }
  }

  registerDigitCount(digit) {
    if (!this.counts[digit]) {
      this.counts[digit] = 0
    }
    this.counts[digit] = this.counts[digit] + 1
  }

  registerPixel(x, y, digit) {
    const pixel = new Pixel(x, y, { digit })
    const id    = pixel.id()

    this.grid[id] = pixel
  }
}

export default Layer
