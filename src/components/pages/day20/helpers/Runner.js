import SimpleMaze  from "./SimpleMaze"
import StackedMaze from "./StackedMaze"

class Runner {
  constructor(data) {
    this.data = data
  }

  compute(part) {
    if (part === "1") {
      return this.shortestPathForSimpleMaze()
    }
    return this.shortestPathForStackedMaze()
  }

  // ========== RUNNERS ===================================

  shortestPathForSimpleMaze() {
    const maze = new SimpleMaze(this.data)
    const path = maze.shortestPath('AA', 'ZZ')

    return path.length - 1
  }

  shortestPathForStackedMaze() {
    const maze = new StackedMaze(this.data)
    const path = maze.shortestPath('AA', 'ZZ')

    return path.length - 1
  }
}
export default Runner
