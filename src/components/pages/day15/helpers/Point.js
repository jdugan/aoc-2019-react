import GridPoint from "../../../../lib/GridPoint"

class Point extends GridPoint {
  constructor(x, y, visual) {
    super(x, y)
    this.setType(this.getTypeForVisual(visual))
  }

  // ========== DIRECTIONS ================================

  getDirections() {
    return [
      "east",
      "north",
      "south",
      "west",
    ]
  }

  // ========== GETTERS/SETTERS ===========================

  // type
  getType() {
    return this.meta.type
  }
  setType(type) {
    return this.meta.type = type
  }

  // visual
  getTypeForVisual(visual) {
    const map = {
      'S': 1,
      '.': 2,
      '#': 3,
      'O': 4,
      ' ': 5
    }
    return map[visual] || 5
  }
  getVisualForType(type) {
    const map = {
      1: 'S',
      2: '.',
      3: '#',
      4: 'O',
      5: ' '
    }
    let visual = map[type] || '#'
    return visual
  }

  // ========== RENDERING =================================

  render() {
    const type = this.getType()
    return this.getVisualForType(type)
  }

  // ========== STATE =====================================

  // types
  isFinish() {
    return this.getType() === 4
  }
  isPath() {
    return this.getType() === 2
  }
  isStart() {
    return this.getType() === 1
  }
  isWall() {
    return this.getType() === 3
  }
}

export default Point
