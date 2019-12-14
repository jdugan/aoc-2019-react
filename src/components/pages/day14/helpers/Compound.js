class Compound {
  constructor(coefficient, element) {
    this.coefficient = parseInt(coefficient)
    this.element     = element
  }

  toString() {
    return `${ this.coefficient } ${ this.element }`
  }
}

export default Compound
