import GridPoint from "../../../../lib/GridPoint"

class Tile extends GridPoint {
  constructor(x, y, visual) {
    super(x, y)
    this.setVisual(visual)
  }

  // ========== ACTIONS ===================================

  clone() {
    return new Tile(this.x, this.y, this.getVisual())
  }

  toHall() {
    this.setVisual('.')
    return this
  }

  toOrigin() {
    this.setVisual('@')
    return this
  }

  // ========== ATTRIBUTES ================================

  // ids
  adjacentIds() {
    return ['north', 'south', 'east', 'west'].map(d => this[`${ d }Id`]())
  }

  // ========== META ======================================

  // visual
  getVisual() {
    return this.meta.visual
  }
  setVisual(val) {
    this.meta.visual = val
  }

  // ========== RENDERING =================================

  render() {
    return this.getVisual()
  }

  // ========== STATE =====================================

  // movement
  isOpen() {
    return this.isHall() || this.isKey() || this.isOrigin()
  }

  // type
  isDoor() {
    return !!this.getVisual().match(/[A-Z]/)
  }
  isOrigin() {
    return this.getVisual() == "@"
  }
  isHall() {
    return this.getVisual() == "."
  }
  isKey() {
    return !!this.getVisual().match(/[a-z]/)
  }
  isWall() {
    return this.getVisual() == "#"
  }
}

export default Tile
