class Moon {
  constructor(x, y, z, vx = 0, vy = 0, vz = 0) {
    this.x  = x
    this.y  = y
    this.z  = z
    this.vx = vx
    this.vy = vy
    this.vz = vz
  }

  // ========== PUBLIC ====================================

  printEnergy() {
    console.log(this.renderEnergy())
  }

  renderEnergy() {
    const texts = [
      this.renderPotentialEnergy(),
      this.renderKineticEnergy(),
      this.renderTotalEnergy()
    ]
    return texts.join(" ")
  }

  // ========== PRIVATE ===================================

  calculateKineticEnergy() {
    const ax = Math.abs(this.vx)
    const ay = Math.abs(this.vy)
    const az = Math.abs(this.vz)
    return ax + ay +az
  }
  calculatePotentialEnergy() {
    const ax = Math.abs(this.x)
    const ay = Math.abs(this.y)
    const az = Math.abs(this.z)
    return ax + ay +az
  }
  calculateTotalEnergy() {
    return this.calculatePotentialEnergy() * this.calculateKineticEnergy()
  }

  normaliseValues(values) {
    return values.map(i => Math.abs(i))
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
