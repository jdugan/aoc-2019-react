import Point from "../../../../lib/GridPoint"

class Runner {
  constructor(paths) {
    const [map0, set0] = this.processPath(paths[0])
    const [map1, set1] = this.processPath(paths[1])

    this.map0   = map0
    this.map1   = map1
    this.set0   = set0
    this.set1   = set1
  }

  compute(part) {
    if (part === "1") {
      return this.shortestManhattan()
    }
    return this.shortestSteps()
  }

  // ========== RUNNERS ===================================
  // These are a little redundant in how they do
  // comparisons, but the problem is so constrained, it
  // doesn't matter for performance...and it is nice to
  // have the point reference handy without complicating
  // the logic further.

  shortestManhattan() {
    const ids = this.getIntersectionIds()
    if (!ids.length) {
      return new Point()
    }

    let closest = this.getPointForId(ids.shift())
    ids.forEach(id => {
      const point = this.getPointForId(id)
      if (point.manhattanDistance() < closest.manhattanDistance()) {
        closest = point
      }
    })

    return closest.manhattanDistance()
  }

  shortestSteps() {
    const ids = this.getIntersectionIds()
    if (!ids.length) {
      return new Point()
    }

    let closest = this.getPointForId(ids.shift())
    ids.forEach(id => {
      const point = this.getPointForId(id)
      if (this.combinedStepsToPoint(point) < this.combinedStepsToPoint(closest)) {
        closest = point
      }
    })

    return this.combinedStepsToPoint(closest)
  }

  // ========== HELPERS ===================================

  directionToIdMethod(dir) {
    const map = {
      "D": "southId",
      "L": "westId",
      "R": "eastId",
      "U": "northId"
    }
    return map[dir] || ""
  }

  getIntersectionIds() {
    let intersections = new Set(
      [...this.set0].filter(key => this.set1.has(key))
    )
    return [...intersections]
  }

  getPointForId(id) {
    const [x, y] = id.split("|").map(s => parseInt(s))
    return new Point(x, y)
  }

  processPath(path) {
    let current = new Point()
    let steps   = 0
    let map     = {}
    let set     = new Set()
    let nextId
    path.forEach(instruction => {
      const dirCode   = instruction.charAt(0)
      const dirMethod = this.directionToIdMethod(dirCode)
      const dirLength = parseInt(instruction.slice(1, instruction.length))

      for(let i = 0; i < dirLength; i++) {
        steps  = steps + 1
        nextId = current[dirMethod]()
        if (!map[nextId]) {
          map[nextId] = steps
        }
        set.add(nextId)
        current = this.getPointForId(nextId)
      }
    })
    return [map, set]
  }

  combinedStepsToPoint(point) {
    const id = point.id()
    const d0 = this.map0[id]
    const d1 = this.map1[id]
    return d0 + d1
  }
}
export default Runner
