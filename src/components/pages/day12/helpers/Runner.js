import Moon   from "./Moon"

class Runner {
  constructor(data) {
    this.data = data

    this.moons = this.prepareMoons(data)
  }

  compute(part, env) {
    if (part === "1") {
      const steps = (env === 'test') ? 10 : 1000
      return this.totalEnergyForSteps(steps)
    }
    return this.stepsToOrbit()
  }

  // ========== RUNNERS ===================================

  stepsToOrbit() {
    const states = new Set()
    let   steps  = 0
    let   key    = this.renderStateKey()
    console.log(key)
    while (!states.has(key) && steps < 5000000) {
      states.add(key)
      this.applyNewton()
      key = this.renderStateKey()
      steps += 1
      if (steps % 100000 === 0) { console.log(steps) }
      if (this.allMoonsAtRest()) { console.log(key) }
    }
    return steps
  }

  totalEnergyForSteps(n) {
    for (let i = 1; i <= n; i++) {
      this.applyNewton()
    }
    return this.calculateTotalEnergy()
  }

  // ========== PHYSICS ===================================

  applyNewton() {
    const perms = [ [0,1],[0,2],[0,3],[1,2],[1,3],[2,3] ]
    perms.forEach(pair => {
      const [m1, m2] = pair.map(i => this.moons[i])

      const dvx = this.velocityChangeForMoons(m1, m2, "x")
      const dvy = this.velocityChangeForMoons(m1, m2, "y")
      const dvz = this.velocityChangeForMoons(m1, m2, "z")

      m1.vx += dvx[0]
      m1.vy += dvy[0]
      m1.vz += dvz[0]
      m2.vx += dvx[1]
      m2.vy += dvy[1]
      m2.vz += dvz[1]
    })
    this.moons.forEach(m => m.updatePosition())
  }

  velocityChangeForMoons(m1, m2, axis) {
    const d = m1[axis] - m2[axis]

    if (d > 0) { return [-1, 1] }
    if (d < 0) { return [1, -1] }
    return [0, 0]
  }

  // ========== HELPERS ===================================

  allMoonsAtRest() {
    return this.moons.every(m => m.isAtRest())
  }
  calculateTotalEnergy() {
    return this.moons.reduce((sum, m) => sum += m.calculateTotalEnergy(), 0)
  }

  prepareMoons(data) {
    return data.map(h => new Moon(h.x, h.y, h.z))
  }

  printEnergy(steps = 0) {
    const texts    = this.moons.map(m => m.renderEnergy())
    const energies = this.moons.map(m => m.calculateTotalEnergy())
    const total    = this.calculateTotalEnergy()

    console.log('')
    console.log(`Energy after ${ steps } steps:`)
    texts.forEach(text => console.log(text))
    console.log(`Sum of total energy: ${ energies.join(' + ')} = ${ total }`)
  }
  printState(steps = 0) {
    const texts = this.moons.map(m => m.renderState())

    console.log('')
    console.log(`After ${ steps } steps:`)
    texts.forEach(text => console.log(text))
  }

  renderStateKey() {
    return this.moons.map(m => m.renderStateKey()).join('|')
  }
}
export default Runner
