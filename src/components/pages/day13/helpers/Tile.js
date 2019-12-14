import Point from "../../../../lib/GridPoint"

class Tile extends Point {
  constructor(x, y, type) {
    super(x, y)

    this.type    = type
    this.visuals = {
      0: " ",
      1: "#",
      2: "x",
      3: "_",
      4: "o"
    }
  }

  // ========== PUBLIC ====================================

  isBlock() {
    return this.type === 2
  }

  render() {
    return this.visuals[this.type]
  }
}

export default Tile
