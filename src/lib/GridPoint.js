class GridPoint {
  constructor(x = 0, y = 0, meta = {}) {
    this.x    = x
    this.y    = y
    this.meta = meta
  }

  // ========== ACTIONS ===================================

  clone() {
    return new GridPoint(this.x, this.y, { ...this.meta })
  }

  // ========== IDS =======================================

  // ids (self)
  id() {
    return `${ this.x }|${ this.y }`
  }
  sortId() {
    return `${ this.y }|${ this.x }`
  }

  // ids (map)
  eastId() {
    return `${ this.x + 1 }|${ this.y }`
  }
  northId() {
    return `${ this.x }|${ this.y + 1 }`
  }
  northEastId() {
    return `${ this.x + 1 }|${ this.y + 1 }`
  }
  northWestId() {
    return `${ this.x - 1 }|${ this.y + 1 }`
  }
  southId() {
    return `${ this.x }|${ this.y - 1 }`
  }
  southEastId() {
    return `${ this.x + 1 }|${ this.y - 1 }`
  }
  southWestId() {
    return `${ this.x - 1 }|${ this.y - 1 }`
  }
  westId() {
    return `${ this.x - 1 }|${ this.y }`
  }

  // ids (helpers)
  directionForId(id) {
    return this.getDirections().find(dir => this[`${ dir }Id`]() === id)
  }
  idForDirection(dir) {
    return this[`${ dir }Id`]()
  }

  // ========== CALCULATIONS ==============================

  // distances
  manhattanDistance(x1 = 0, y1 = 0) {
    const dx = Math.abs(this.x - x1)
    const dy = Math.abs(this.y - y1)
    return dx + dy
  }

  // ========== DIRECTIONS ================================

  getDirections() {
    return [
      "east",
      "north",
      "south",
      "west",
      "northEast",
      "northWest",
      "southEast",
      "southWest"
    ]
  }

  // ========== RENDERING =================================

  render() {
    return ' '
  }
}

export default GridPoint
