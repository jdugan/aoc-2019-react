import Point from "../../../../lib/GridPoint"

class Tile extends Point {
  constructor(x, y, type = 0) {
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

  // actions
  destroy() {
    this.type = 0
  }
  render() {
    return this.visuals[this.type]
  }

  // states (behaviours)
  isReflecting() {
    this.isWall() || this.isBlock() || this.isPaddle()
  }

  // states (types)
  isBall() {
    return this.type === 4
  }
  isBlock() {
    return this.type === 2
  }
  isPaddle() {
    return this.type === 3
  }
  isWall() {
    return this.type === 1
  }
}

export default Tile
