import Maze from "./Maze"

class Runner {
  constructor(data) {
    this.data = data
  }

  compute(part) {
    if (part === "1") {
      return this.shortestPath()
    }
    return 2
  }

  // ========== RUNNERS ===================================

  shortestPath() {
    const maze = new Maze(this.data)
    const path = maze.shortestPath('AA', 'ZZ')
    return path.length - 1
  }
}
export default Runner
