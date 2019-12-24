import ArrayUtil from "../../../../util/Arrays"
import Printer   from "../../../../lib/GridPrinter"
import Tile      from "./Tile"

class Grid {
  constructor(data) {
    this.tiles = this.parseData(data)
  }

  // ========== PUBLIC ====================================

  firstRepeatedRating() {
    const ratings = new Set()
    let   ticks = 0
    let   rating

    ratings.add(this.calculateRating())
    while (ticks < 10000) {
      ticks += 1
      rating = this.tick()
      if (!ratings.has(rating)) {
        ratings.add(rating)
      } else {
        break
      }
    }

    console.log('-----------------------------')
    this.calculateRating(true)
    this.print(ticks)
    return rating
  }

  // ========== PRIVATE ===================================

  // main
  calculateRating(debug = false) {
    const ratings = Object.values(this.tiles).map(t => t.ratingValue())
    if (debug) { console.log(ratings) }
    return ArrayUtil.sum(ratings)
  }

  // helpers
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

  print(ticks = 0) {
    const printer = new Printer(this.tiles)
    this.printHeader(ticks)
    printer.print()
    console.log('')
  }

  printHeader(ticks) {
    let text
    switch (ticks) {
      case 0:
        text = "Initial state:"
        break
      case 1:
        text = "After 1 minute:"
        break
      default:
        text = `After ${ ticks } minutes:`
    }
    console.log(text)
  }

  tick() {
    const nextActions = {}
    let id
    let bugs

    Object.values(this.tiles).forEach(tile => {
      id   = tile.id()
      bugs = tile.adjacentIds().filter(tid => this.tiles[tid] && this.tiles[tid].isBug())
      if (tile.isBug() && bugs.length !== 1) {
        nextActions[id] = "die"
      }
      if (tile.isSpace() && [1,2].includes(bugs.length)) {
        nextActions[id] = "spawn"
      }
    })
    Object.entries(nextActions).forEach(([id, method]) => {
      this.tiles[id][method]()
    })

    return this.calculateRating()
  }
}

export default Grid
