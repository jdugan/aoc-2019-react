import Point from "../../../../lib/GridPoint"

class Asteroid extends Point {
  constructor(x, y) {
    super(x, y, { observations: new Set() })
  }

  // ========== PUBLIC ====================================

  addObservation(id) {
    this.meta.observations.add(id)
  }
  getObservationCount() {
    return this.meta.observations.size
  }

  print() {
    console.log('#')
  }
  render() {
    return this.meta.visual
  }
}

export default Asteroid
