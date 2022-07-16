import Graph from "node-dijkstra"

class Game {
  constructor(originIds, keys, steps) {
    this.originIds = originIds
    this.keys      = keys
    this.steps     = steps
  }

  // ========== ATTRIBUTES ================================

  id() {
    const keys = this.keys.sort()
    const ids  = this.originIds.sort()

    return keys.concat(ids).join(',')
  }

  // ========== ACTIONS ===================================

  generateGraph(grid, originId) {
    const graph       = new Graph()
    let   mappableIds = new Set([originId])
    const mappedIds   = new Set()
    const keyIds      = []

    while (mappableIds.size > 0) {
      const ids = new Set()
      mappableIds.forEach(mid => {
        const nodes = {}

        // process adjacent tiles
        const m  = grid.tiles[mid]
        const as = m.adjacentIds().map(aid => grid.tiles[aid]).filter(t => t && t.isOpen())
        as.forEach(a => {
          const aid = a.id()
          nodes[aid] = 1
          if (a.isKey()) {
            keyIds.push(aid)
          }
          if (!mappedIds.has(aid)) {
            ids.add(aid)
          }
        })

        // record decisions
        graph.addNode(mid, nodes)
        mappedIds.add(mid)
      })

      mappableIds = ids
    }

    return { graph, keyIds }
  }

  generateGrid(baseGrid) {
    const baseIds = baseGrid.getOrigins().map(t => t.id())
    let   grid    = baseGrid.clone()

    this.keys.forEach(k => {
      grid = grid.collectKey(k)
    })
    baseIds.forEach((id, index) => {
      grid = grid.moveOrigin(id, this.originIds[index])
    })

    return grid
  }

  generateNewGames(baseGrid) {
    const grid              = this.generateGrid(baseGrid)
    const futures           = []

    this.originIds.forEach((originId, oIndex) => {
      const { graph, keyIds } = this.generateGraph(grid, originId)

      keyIds.forEach(kid => {
        const path = graph.path(originId, kid)
        if (path) {
          // step up new arguments
          const keys  = this.keys.concat([])
          const steps = this.steps + path.length - 1

          // collect keys and move origin
          path.forEach(id => {
            const tile = grid.tiles[id]
            if (tile && tile.isKey()) {
              keys.push(tile.getVisual())
            }
          })

          // clone origins and replace current
          const new_originIds = this.originIds.map(id => id)
          new_originIds[oIndex] = kid

          // save new game in list
          const game = new Game(new_originIds, keys, steps)
          futures.push(game)
        }
      })
    })

    return futures
  }
}

export default Game
