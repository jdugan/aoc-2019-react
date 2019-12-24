import GridPoint from "../../../../lib/GridPoint"

class Tile extends GridPoint {
  constructor(x, y, visual) {
    super(x, y)
    this.setRatingId(x, y)
    this.setVisual(visual)
  }

  // ========== ACTIONS ===================================

  die() {
    this.setVisual('.')
  }

  spawn() {
    this.setVisual('#')
  }

  // ========== ATTRIBUTES ================================

  // ids
  adjacentIds() {
    return ['north', 'south', 'east', 'west'].map(d => this[`${ d }Id`]())
  }

  // rating
  ratingValue() {
    return (this.isBug()) ? 2 ** this.getRatingId(): 0
  }

  // ========== META ======================================

  // rating id
  getRatingId() {
    return this.meta.ratingId
  }
  setRatingId(x, y) {
    this.meta.ratingId = (this.y * 5) + this.x
  }

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
