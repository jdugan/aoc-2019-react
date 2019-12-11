import Point from "../../../../lib/GridPoint"

class HullPanel extends Point {
  constructor(x, y) {
    super(x, y, { color: 0 })
  }

  // ========== PUBLIC ====================================

  getColor() {
    return this.meta.color
  }
  setColor(color) {
    this.meta.color = color
  }

  print() {
    const color   = this.getColor()
    const display = (color) ? "#" : "."
    console.log(display)
  }
  render() {
    return this.getColor()
  }
}

export default HullPanel
