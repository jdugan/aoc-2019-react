import Point from "../../../../lib/GridPoint"

class Tile extends Point {
  constructor(x, y, type) {
    super(x, y, { type })
  }

  isBlock() {
    return this.meta.type === 2
  }
}

export default Tile
