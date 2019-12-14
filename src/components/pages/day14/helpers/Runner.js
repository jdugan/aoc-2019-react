import Factory from "./Factory"

class Runner {
  constructor(data) {
    this.factory = new Factory(data)
  }

  compute(part) {
    if (part === "1") {
      return this.factory.minimumOreRequired()[0]
    }
    return this.factory.maximumFuelProduced()   // careful, prod takes ~20mins  <grimacing>
  }
}

export default Runner
