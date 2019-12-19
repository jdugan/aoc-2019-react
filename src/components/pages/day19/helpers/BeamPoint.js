import Point from "../../../../lib/GridPoint"

class BeamPoint extends Point {
  constructor(x, y, status = 0) {
    super(x, y)
    this.setStatus(status)
  }

  // ========== PUBLIC ====================================

  isPulled() {
    return this.getStatus() === 1
  }

  render() {
    return (this.isPulled()) ? '#' : '.'
  }

  // ========== PRIVATE ===================================

  getStatus() {
    return this.meta.status
  }
  setStatus(val) {
    this.meta.status = (val === 1) ? 1 : 0
  }
}

export default BeamPoint
