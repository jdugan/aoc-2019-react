import Point from "../../../../lib/GridPoint"

class BeamPoint extends Point {
  constructor(x, y, status = 0) {
    super(x, y)
    this.setStatus(status)
  }

  // ========== ATTRIBUTES ================================

  // score
  getScore() {
    return (this.x * 10000) + this.y
  }

  // status
  getStatus() {
    return this.meta.status
  }
  setStatus(val) {
    this.meta.status = (val === 1) ? 1 : 0
  }

  // ========== ACTIONS ===================================

  render() {
    return (this.isPulled()) ? '#' : '.'
  }

  // ========== STATE =====================================

  isPulled() {
    return this.getStatus() === 1
  }
}

export default BeamPoint
