import ArrayUtil from "../../../../util/Arrays"

class Moon {
  constructor(x, y, z, vx = 0, vy = 0, vz = 0) {
    this.origin = {
      x: x,
      y: y,
      z: z,
      vx: vx,
      vy: vy,
      vz: vz
    }

    this.x  = x
    this.y  = y
    this.z  = z
    this.vx = vx
    this.vy = vy
    this.vz = vz
  }

  // ========== GETTERS/SETTERS ===========================

  getPositions() {
    return [this.x, this.y, this.z]
  }
  getVelocities() {
    return [this.vx, this.vy, this.vz]
  }
  getValues() {
    return this.getPositions().concat(this.getVelocities())
  }

  updatePosition() {
    this.updatePositionX()
    this.updatePositionY()
    this.updatePositionZ()
  }
  updatePositionX() {
    this.x += this.vx
  }
  updatePositionY() {
    this.y += this.vy
  }
  updatePositionZ() {
    this.z += this.vz
  }

  // ========== STATE =====================================

  isAtOriginX() {
    return this.x === this.origin.x && this.vx === this.origin.vx
  }
  isAtOriginY() {
    return this.y === this.origin.y && this.vy === this.origin.vy
  }
  isAtOriginZ() {
    return this.z === this.origin.z && this.vz === this.origin.vz
  }

  // ========== CALCULATIONS ==============================

  calculateKineticEnergy() {
    const values = this.normaliseValues(this.getVelocities())
    return ArrayUtil.sum(values)
  }
  calculatePotentialEnergy() {
    const values = this.normaliseValues(this.getPositions())
    return ArrayUtil.sum(values)
  }
  calculateTotalEnergy() {
    return this.calculatePotentialEnergy() * this.calculateKineticEnergy()
  }

  normaliseValues(values) {
    return values.map(i => Math.abs(i))
  }

  // ========== RENDERING =================================

  renderEnergy() {
    const pe = this.renderPotentialEnergy()
    const ke = this.renderKineticEnergy()
    const te = this.renderTotalEnergy()
    return [pe, ke, te].join(" ")
  }
  renderKineticEnergy() {
    const values = this.normaliseValues([this.vx, this.vy, this.vz])
    return `kin: ${ values[0] } + ${ values[1] } + ${ values[2] } = ${ this.calculateKineticEnergy() }`
  }
  renderPotentialEnergy() {
    const values = this.normaliseValues([this.x, this.y, this.z])
    return `pot: ${ values[0] } + ${ values[1] } + ${ values[2] } = ${ this.calculatePotentialEnergy() }`
  }
  renderTotalEnergy() {
    return `total: ${ this.calculatePotentialEnergy() } * ${ this.calculateKineticEnergy() } = ${ this.calculateTotalEnergy() }`
  }
}

export default Moon
