import Grid from "./Grid"

class Runner {
  constructor(data) {
    this.data = data
  }

  compute(part) {
    if (part === "1") {
      return this.firstRepeatedRating()
    }
    return 2
  }

  // ========== RUNNERS ===================================

  firstRepeatedRating() {
    const grid = new Grid([...this.data])
    return grid.firstRepeatedRating()
  }
}
export default Runner
