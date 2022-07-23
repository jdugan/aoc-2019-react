import ArrayUtil from "../../../../util/Arrays"
import Tile      from "./Tile"

class RecursiveGrid {
  constructor(data) {
    this.grids    = {}
    this.grids[0] = this.buildBaseGrid(data)
  }

  // ========== ATTRIBUTES ================================

  bugCountAfter(iterations) {
    for (let i = 0; i < iterations; i++) {
      this.tick()
    }

    return this.bugCount()
  }

  // ========== ATTRIBUTES ================================

  bugCount() {
    const grids = Object.values(this.grids)
    const tiles = grids.flatMap(g => Object.values(g))
    const bugs  = tiles.filter(t => t.isBug())

    return bugs.length
  }

  // ========== NATURE ====================================

  tick() {
    // add new nested grids, if needed
    this.extendGrids()

    // figure out which tiles will change state
    const nextActions = {}
    Object.entries(this.grids).forEach(([gridId, tiles]) => {
      const gid        = parseInt(gridId)
      nextActions[gid] = {}

      Object.values(tiles).forEach(tile => {
        const localBugs  = tile.adjacentIds().filter(tid => {
          const t = this.grids[gid][tid]
          return t && t.isBug()
        })
        const remoteBugs = tile.recursiveAdjacentIds(gid).filter(tuple => {
          const g = this.grids[tuple[0]]
          const t = g && g[tuple[1]]
          return t && t.isBug()
        })
        const bugs = localBugs.concat(remoteBugs)

        if (tile.isBug() && bugs.length !== 1) {
          nextActions[gid][tile.id()] = "die"
        }
        if (tile.isSpace() && [1,2].includes(bugs.length)) {
          nextActions[gid][tile.id()] = "spawn"
        }
      })
    })

    // then apply those state changes
    Object.entries(nextActions).forEach(([gid, tiles]) => {
      Object.entries(tiles).forEach(([tid, method]) => {
        this.grids[gid][tid][method]()
      })
    })
  }

  // ========== CONSTRUCTION ==============================

  buildBaseGrid(data) {
    const tiles = {}
    let   tile
    data.forEach((row, y) => {
      row.split('').forEach((visual, x) => {
        if (x == 2 && y ==2) {
          // skip center
        } else {
          tile = new Tile(x, y, visual)
          tiles[tile.id()] = tile
        }
      })
    })
    return tiles
  }

  buildNestedGrid() {
    const tiles = {}
    let   tile
    for (let y = 0; y < 5; y++) {
      for (let x = 0; x < 5; x++) {
        if (x == 2 && y ==2) {
          // skip center
        } else {
          tile = new Tile(x, y, '.')
          tiles[tile.id()] = tile
        }
      }
    }
    return tiles
  }

  extendGrids() {
    const zs   = Object.keys(this.grids).map(k => parseInt(k)).sort((a,b) => a - b)
    const zMin = zs[0]
    const zMax = zs.pop()

    const minBugs = Object.values(this.grids[zMin]).filter(t => t.isBug())
    if (minBugs.length) {
      this.grids[zMin - 1] = this.buildNestedGrid()
    }

    const maxBugs = Object.values(this.grids[zMax]).filter(t => t.isBug())
    if (maxBugs.length) {
      this.grids[zMax + 1] = this.buildNestedGrid()
    }
  }
}

export default RecursiveGrid
