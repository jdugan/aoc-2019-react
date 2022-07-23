import GridPoint from "../../../../lib/GridPoint"

class Tile extends GridPoint {
  constructor(x, y, visual) {
    super(x, y)

    this.setVisual(visual)
  }

  // ========== ACTIONS ===================================

  die() {
    this.setVisual('.')
  }

  spawn() {
    this.setVisual('#')
  }

  // ========== IDS =======================================

  adjacentIds() {
    return ['north', 'south', 'east', 'west'].map(d => this[`${ d }Id`]())
  }

  recursiveAdjacentIds(z) {
    const tuples = []

    // outer cells > toward layer above
    if (this.x == 0) {                    // left
      tuples.push([z + 1, "1|2"])
    }
    if (this.x == 4) {                    // right
      tuples.push([z + 1, "3|2"])
    }
    if (this.y == 0) {                    // top
      tuples.push([z + 1, "2|1"])
    }
    if (this.y == 4) {                    // bottom
      tuples.push([z + 1, "2|3"])
    }

    // inner cells > toward layer below
    if (this.x == 1 && this.y == 2) {     // left
      for (let y = 0; y < 5; y++) {
        tuples.push([z - 1, `0|${ y }`])
      }
    }
    if (this.x == 3 && this.y == 2) {     // right
      for (let y = 0; y < 5; y++) {
        tuples.push([z - 1, `4|${ y }`])
      }
    }
    if (this.x == 2 && this.y == 1) {     // top
      for (let x = 0; x < 5; x++) {
        tuples.push([z - 1, `${ x }|0`])
      }
    }
    if (this.x == 2 && this.y == 3) {     // bottom
      for (let x = 0; x < 5; x++) {
        tuples.push([z - 1, `${ x }|4`])
      }
    }

    return tuples
  }

  // ========== ATTRIBUTES ================================

  biodiversityScore() {
    if (this.isSpace()) {
      return 0
    }

    return 2 ** (this.position())
  }

  position() {
    return (this.y * 5) + this.x
  }

  // ========== META ======================================

  // visual
  getVisual() {
    return this.meta.visual
  }
  setVisual(val) {
    this.meta.visual = val
  }

  // ========== RENDERING =================================

  render() {
    return this.getVisual()
  }

  // ========== STATE =====================================

  // type
  isBug() {
    return this.getVisual() === '#'
  }
  isSpace() {
    return this.getVisual() === '.'
  }
}

export default Tile
