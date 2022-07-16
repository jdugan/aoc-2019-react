import Printer   from "../../../../lib/GridPrinter"
import Tile      from "./Tile"

class Grid {
  constructor(data=[]) {
    this.tiles = this._parseData(data)
  }

  // ========== ACTIONS ====================================

  clone() {
    const g  = new Grid()
    Object.values(this.tiles).forEach((t) => {
      g.tiles[t.id()] = t.clone()
    })
    return g
  }

  collectKey(letter) {
    const upper = letter.toUpperCase()
    const lower = letter.toLowerCase()

    Object.values(this.tiles).forEach(t => {
      if (t.getVisual() == upper || t.getVisual() == lower) {
        this.tiles[t.id()] = t.toHall()
      }
    })

    return this
  }

  moveOrigin(fromId, toId) {
    this.tiles[fromId] = this.tiles[fromId].toHall()
    this.tiles[toId]   = this.tiles[toId].toOrigin()

    return this
  }

  print() {
    const printer = new Printer(this.tiles)
    printer.print()
    console.log('')
  }

  // ========== TILE HELPERS ==============================

  getKeys() {
    return Object.values(this.tiles).filter(t => t.isKey())
  }

  getOrigins() {
    return Object.values(this.tiles).filter(t => t.isOrigin())
  }

  // ========== DATA HELPERS ==============================

  // helpers
  _parseData(data) {
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

export default Grid
