import FlatGrid      from "./FlatGrid"
import RecursiveGrid from "./RecursiveGrid"

class Runner {
  constructor(data) {
    this.data = data
  }

  compute(part, env) {
    if (part === "1") {
      return this.flatBiodiversityRating()
    }
    return this.recursiveBugCount(env)
  }

  // ========== RUNNERS ===================================

  flatBiodiversityRating() {
    const grid   = new FlatGrid([...this.data])
    const rating = grid.biodiversityRating()

    return rating
  }

  recursiveBugCount(env) {
    const iters = (env == "test") ? 10 : 200
    const grid  = new RecursiveGrid([...this.data])
    const count = grid.bugCountAfter(iters)

    return count
  }
}
export default Runner
