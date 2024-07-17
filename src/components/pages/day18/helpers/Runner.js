/* eslint-disable no-loop-func */
import Game from "./Game"
import Grid from "./Grid"

class Runner {
  constructor(data) {
    this.grid = new Grid(data)
  }

  compute(part) {
    if (part === "1") {
      return this.shortestPathToCollectKeys()
    }
    return this.shortestPathToCollectKeys()
  }

  // ========== RUNNERS ===================================

  shortestPathToCollectKeys() {
    const originIds = this.grid.getOrigins().map(t => t.id())
    const numKeys   = this.grid.getKeys().length

    const initial_game      = new Game(originIds, [], 0)
    let   current_possibles = [initial_game]
    let   best              = -1

    this.grid.print()

    while (current_possibles.length > 0) {
      const new_possibles = []
      current_possibles.forEach(possible => {
        if (possible.keys.length === numKeys) {
          if (best === -1 || best > possible.steps) {
            best = possible.steps
          }
        }
        else {
          const new_games = possible.generateNewGames(this.grid)
          new_games.forEach(ng => {
            if (best === -1 || best > ng.steps) {
              new_possibles.push(ng)
            }
          })
        }
      })

      current_possibles = this.reducePossibles(new_possibles)
      console.log(current_possibles.length, best)
    }

    return best
  }

  // ========== HELPERS ===================================

  reducePossibles(games) {
    const hash = {}
    games.forEach(g => {
      const id = g.id()
      const eg = hash[id]
      if (!eg || g.steps < eg.steps) {
        hash[id] = g
      }
    })
    return Object.values(hash)
  }

}
export default Runner
