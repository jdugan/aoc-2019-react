import ArrayUtil from "../../../../util/Arrays"
import Tile      from "./Tile"

class FlatGrid {
  constructor(data) {
    this.tiles = this.parseData(data)
  }

  // ========== ATTRIBUTES ================================

  // the biodiversity rating is the grid rating the
  // first time the grid repeats itself.
  //
  biodiversityRating() {
    // build historical set
    const ratingHistory = new Set()
    ratingHistory.add(this.rating())

    // loop until duplicate found
    let goldenRating
    while (!goldenRating) {
      this.tick()

      const rating = this.rating()
      if (ratingHistory.has(rating)) {
        goldenRating = rating
      } else {
        ratingHistory.add(rating)
      }
    }

    // return dup
    return goldenRating
  }

  // ========== ATTRIBUTES ================================

  rating() {
    const tileRatings = Object.values(this.tiles).map(t => t.biodiversityScore())
    const total       = ArrayUtil.sum(tileRatings)

    return total
  }

  // ========== NATURE ====================================

  tick() {
    // figure out which tiles will change state
    const nextActions = {}
    Object.values(this.tiles).forEach(tile => {
      const bugs = tile.adjacentIds().filter(tid => {
        const t = this.tiles[tid]
        return t && t.isBug()
      })

      if (tile.isBug() && bugs.length !== 1) {
        nextActions[tile.id()] = "die"
      }
      if (tile.isSpace() && [1,2].includes(bugs.length)) {
        nextActions[tile.id()] = "spawn"
      }
    })

    // then apply those state changes
    Object.entries(nextActions).forEach(([id, method]) => {
      this.tiles[id][method]()
    })
  }

  // ========== CONSTRUCTION ==============================

  parseData(data) {
    const tiles = {}
    let   tile
    data.forEach((row, y) => {
      row.split('').forEach((visual, x) => {
        tile = new Tile(x, y, visual)
        tiles[tile.id()] = tile
      })
    })
    return tiles
  }
}

export default FlatGrid
