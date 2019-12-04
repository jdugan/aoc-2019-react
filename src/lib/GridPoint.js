class GridPoint {
  constructor(x = 0, y = 0) {
    this.x = x
    this.y = y
  }

  // ========== IDS =======================================

  // ids (self)
  id() {
    return `${ this.x }|${ this.y }`
  }

  // ids (map)
  eastId() {
    return `${ this.x + 1 }|${ this.y }`
  }
  northId() {
    return `${ this.x }|${ this.y + 1 }`
  }
  southId() {
    return `${ this.x }|${ this.y - 1 }`
  }
  westId() {
    return `${ this.x - 1 }|${ this.y }`
  }

  // ========== CALCULATIONS ==============================

  // distances
  manhattanDistance(x1 = 0, y1 = 0) {
    const dx = Math.abs(this.x - x1)
    const dy = Math.abs(this.y - y1)
    return dx + dy
  }
}

export default GridPoint
