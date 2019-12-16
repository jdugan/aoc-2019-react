import ArrayUtil  from "../../../../util/Arrays"
import Moon       from "./Moon"

class OrbitGroup {
  constructor(data) {
    this.moons = this.buildMoons(data)
  }

  // ========== RUNNERS ===================================

  periods() {
    const periods = { x: 0, y: 0, z: 0 }
    let   count   = 0

    while (!periods.x || !periods.y || !periods.z) {
      this.applyNewton()
      count = count + 1

      if (!periods.x && this.moons.every(m => m.isAtOriginX())) {
        periods.x = count
      }
      if (!periods.y && this.moons.every(m => m.isAtOriginY())) {
        periods.y = count
      }
      if (!periods.z && this.moons.every(m => m.isAtOriginZ())) {
        periods.z = count
      }
    }
    return Object.values(periods)
  }

  totalEnergyForSteps(n) {
    for (let i = 1; i <= n; i++) {
      this.applyNewton()
    }
    return this.calculateTotalEnergy()
  }

  // ========== PHYSICS ===================================

  applyNewton() {
    const pairs = [ [0,1],[0,2],[0,3],[1,2],[1,3],[2,3] ]
    pairs.forEach(pair => {
      const [m1, m2] = pair.map(i => this.moons[i])

      this.applyNewtonX(m1, m2)
      this.applyNewtonY(m1, m2)
      this.applyNewtonZ(m1, m2)
    })
    this.moons.forEach(m => m.updatePosition())
  }
  applyNewtonX(m1, m2) {
    const [dv1, dv2] = this.velocityChangeForMoons(m1, m2, "x")
    m1.vx += dv1
    m2.vx += dv2
  }
  applyNewtonY(m1, m2) {
    const [dv1, dv2] = this.velocityChangeForMoons(m1, m2, "y")
    m1.vy += dv1
    m2.vy += dv2
  }
  applyNewtonZ(m1, m2) {
    const [dv1, dv2] = this.velocityChangeForMoons(m1, m2, "z")
    m1.vz += dv1
    m2.vz += dv2
  }

  velocityChangeForMoons(m1, m2, axis) {
    const d = m1[axis] - m2[axis]

    if (d > 0) { return [-1, 1] }
    if (d < 0) { return [1, -1] }
    return [0, 0]
  }

  // ========== CALCULATIONS ==============================

  calculateTotalEnergy() {
    const energies = this.moons.map(m => m.calculateTotalEnergy())
    return ArrayUtil.sum(energies)
  }

  // ========== RENDERING =================================

  printEnergy(steps = 0) {
    const texts    = this.moons.map(m => m.renderEnergy())
    const energies = this.moons.map(m => m.calculateTotalEnergy())
    const total    = this.calculateTotalEnergy()

    console.log('')
    console.log(`Energy after ${ steps } steps:`)
    texts.forEach(text => console.log(text))
    console.log(`Sum of total energy: ${ energies.join(' + ')} = ${ total }`)
  }

  // ========== HELPERS ===================================

  buildMoons(data) {
    return data.map(h => new Moon(h.x, h.y, h.z))
  }
}

export default OrbitGroup
