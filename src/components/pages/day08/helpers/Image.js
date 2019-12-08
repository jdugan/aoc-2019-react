import ArrayUtil from "../../../../util/Arrays"
import Layer     from "./Layer"

class Image {
  constructor(width, height, data) {
    this.data   = data
    this.height = height
    this.width  = width

    this.layers = this.buildLayers(width, height, data)
  }

  // ========== PUBLIC ====================================

  checksum() {
    const lowest = this.layers.sort(this.zeroesComparator)[0]
    const calc   = lowest.countDigit(1) * lowest.countDigit(2)
    return calc
  }

  render() {
    const rows = []
    for (let y = 0; y > -this.height; y--) {
      const row = []
      for (let x = 0; x < this.width; x++) {
        const id     = `${ x }|${ y }`
        const digits = this.layers.map(layer => {
          const pixel = layer.grid[id]
          return pixel.meta.digit
        })
        const value   = digits.filter(d => d !== 2)[0]
        const display = (value === 0) ? ' ' : '0'
        row.push(display)
      }
      rows.push(row)
    }
    rows.forEach(row => console.log(row.join('')))
    return "see console"
  }

  // ========== PRIVATE ===================================

  buildLayers(width, height, data) {
    const chunks = ArrayUtil.toChunks(data, width * height)
    const layers = chunks.map(chunk => new Layer(width, height, chunk))
    return layers
  }

  zeroesComparator(o1, o2) {
    const n1 = o1.countDigit(0)
    const n2 = o2.countDigit(0)

    if (n1 > n2) { return 1 }
    if (n1 < n2) { return -1 }
    return 0
  }
}

export default Image
