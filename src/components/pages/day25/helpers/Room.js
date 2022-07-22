import GridPoint from "../../../../lib/GridPoint"

class Room extends GridPoint {
  constructor(x, y, visual, name, doors, items=[]) {
    super(x, y)

    this.setName(name)
    this.setVisual(visual)
    this.setDoors(doors)
    this.setItems(items)
  }

  // ========== ATTRIBUTES ================================

  adjacentIds() {
    return this.getDoors().map(d => this.idForDirection(d))
  }

  // ========== HELPERS ===================================

  invertCommand(cmd) {
    let icmd
    switch (cmd) {
      case "north":
        icmd = "south"
        break
      case "south":
        icmd = "north"
        break
      case "west":
        icmd = "east"
        break
      case "east":
        icmd = "west"
        break
    }
    return icmd
  }

  // ========== GETTERS/SETTERS ===========================

  // doors
  getDoors() {
    return this.meta.doors
  }
  setDoors(doors) {
    this.meta.doors = doors
  }

  // items
  getItems() {
    return this.meta.items
  }
  setItems(items) {
    this.meta.items = items
  }

  // name
  getName() {
    return this.meta.name
  }
  setName(name = null) {
    this.meta.name = name
  }

  // visual
  getVisual() {
    return this.meta.visual
  }
  setVisual(visual) {
    this.meta.visual = visual
  }

  // ========== RENDERING =================================

  render() {
    return this.getVisual()
  }

  // ========== STATE =====================================

  isCheckpoint() {
    return this.getVisual() === 'X'
  }
  isOrigin() {
    return this.getVisual() === 'O'
  }
}

export default Room
