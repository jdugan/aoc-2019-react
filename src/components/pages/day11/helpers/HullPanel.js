import Point from "../../../../lib/GridPoint"

class HullPanel extends Point {
  constructor(x, y, color = 0) {
    super(x, y, { color })
  }

  // ========== PUBLIC ====================================

  getColor() {
    return this.meta.color
  }
  setColor(color) {
    this.meta.color = color
  }

  print() {
    const display = this.render()
    console.log(display)
  }
  render() {
    const color   = this.getColor()
    const display = (color) ? "#" : " "
    return display
  }
}

export default HullPanel
