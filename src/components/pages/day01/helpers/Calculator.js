import ArrayUtil from '../../../../util/Arrays'

class Calculator {
  constructor(data) {
    this.data = data
  }

  compute(part) {
    if (part === "1") {
      return this.simpleTotal()
    }
    return this.recursiveTotal()
  }

  // ========== PRIVATE ===================================

  // main
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

  // helpers
  fuelForMass(mass) {
    return Math.floor(mass / 3) - 2
  }

  sumArray(arr) {

  }
}

export default Calculator
