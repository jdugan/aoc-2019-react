import GridPoint from "../../../../lib/GridPoint"

class Tile extends GridPoint {
  constructor(x, y, type) {
    super(x, y)
    this.setType(type)
  }

  // ========== GETTERS/SETTERS ===========================

  // type
  getType() {
    return this.meta.type
  }
  setType(type) {
    return this.meta.type = type
  }

  // ========== CALCULATIONS ==============================

  alignmentParameter() {
    return this.x * this.y
  }

  // ========== RENDERING =================================

  render() {
    const type = this.getType()
    return String.fromCharCode(type)
  }

  // ========== STATE =====================================

  // state
  isTumbling() {
    return this.getType() === 88
  }
  // types
  isScaffold() {
    return this.getType() === 35
  }
  isSpace() {
    return this.getType() === 46
  }
  isVacuum() {
    return [60, 62, 86, 94, 118].includes(this.getType())   // 86 = V, 118 = v (which?)
  }
}

export default Tile
