import GridPoint from "../../../../lib/GridPoint"

class Point extends GridPoint {
  constructor(x, y, visual) {
    super(x, y)
    this.setType(this.getTypeForVisual(visual))
  }

  // ========== GETTERS/SETTERS ===========================

  // name
  getName() {
    return this.meta.name
  }
  setName(name) {
    this.meta.name = name
  }

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
      ' ': 0,
      '.': 1,
      '#': 2
    }
    return map[visual] || -1
  }
  getVisualForType(type) {
    const map = {
      0: ' ',
      1: '.',
      2: '#'
    }
    let visual = map[type] || ' '
    if (this.getName()) {
      visual = 'P'
    }
    return visual
  }

  // ========== RENDERING =================================

  render() {
    const type = this.getType()
    return this.getVisualForType(type)
  }

  // ========== STATE =====================================

  isLetter() {
    return this.getType() === -1
  }
  isPath() {
    return this.getType() === 1
  }
  isPortal() {
    return this.getType() === 1 && this.getName()
  }
  isWall() {
    return this.getType() === 2
  }
}

export default Point
