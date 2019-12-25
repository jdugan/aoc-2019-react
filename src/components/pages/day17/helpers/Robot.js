class Robot {
  constructor(tiles, current, direction = 'north') {
    this.tiles     = tiles
    this.current   = current
    this.direction = direction
    this.path      = []
    this.steps     = 0
  }

  // ========== PUBLIC ====================================

  explore() {
    let moved = true
    while (moved) {
      moved = this.moveForward()
      if (!moved) {
        moved = this.moveSideways('left')
        if (!moved) {
          moved = this.moveSideways('right')
        }
      }
    }
    return this.path.join(',')
  }

  // ========== PRIVATE ===================================

  directionForTurn(turn) {
    const dirs   = ['south', 'east', 'north', 'west']  // y-axis inverted
    const factor = (turn === 'left') ? -1 : 1
    const curr   = dirs.indexOf(this.direction)
    let   index  = (curr + factor) % dirs.length
    if (index < 0) {
      index = dirs.length - 1
    }
    return dirs[index]
  }

  moveForward() {
    const nextId = this.current.idForDirection(this.direction)
    const next   = this.tiles[nextId]
    if (next && next.isScaffold()) {
      this.steps  += 1
      this.current = next
      return true
    }
    if (this.steps > 0) {
      this.path.push(this.steps)
      this.steps = 0
    }
    return false
  }

  moveSideways(turn) {
    const dir    = this.directionForTurn(turn)
    const nextId = this.current.idForDirection(dir)
    const next   = this.tiles[nextId]
    if (next && next.isScaffold()) {
      this.path.push(turn.toUpperCase()[0])
      this.steps     = 1
      this.direction = dir
      this.current   = next
      return true
    }
    return false
  }
}

export default Robot
