import ArrayUtil from '../../../../util/Arrays'

class Runner {
  constructor(data) {
    this.data = data
  }

  compute(part) {
    if (part === "1") {
      return this.simpleTotal()
    }
    return this.recursiveTotal()
  }

  // ========== RUNNERS ===================================

  recursiveTotal() {
    const array = this.data.map(mass => {
      let arr = []
      let ffm = this.fuelForMass(mass)
      while (ffm > 0) {
        arr.push(ffm)
        ffm = ffm = this.fuelForMass(ffm)
      }
      return ArrayUtil.sum(arr)
    })
    return ArrayUtil.sum(array)
  }

  simpleTotal() {
    const array = this.data.map(mass => this.fuelForMass(mass))
    return ArrayUtil.sum(array)
  }

  // ========== HELPERS ===================================

  fuelForMass(mass) {
    return Math.floor(mass / 3) - 2
  }
}

export default Runner
