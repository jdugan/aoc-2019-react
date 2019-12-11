import Grid from "./Grid"

class Runner {
  constructor(data) {
    this.grid = new Grid(data)
  }

  compute(part) {
    if (part === "1") {
      return this.grid.mostObservations()
    }
    return this.grid.vaporisationChecksum()
  }

  // ========== RUNNERS ===================================

}
export default Runner
