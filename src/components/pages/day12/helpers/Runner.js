import Moon from "./Moon"

class Runner {
  constructor(data) {
    this.data = data

    this.moons = this.prepareMoons(data)
  }

  compute(part) {
    if (part === "1") {
      this.printEnergy()
      return this.calculateTotalEnergy()
    }
    return 2
  }

  // ========== PRIVATE ===================================

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
}
export default Runner
