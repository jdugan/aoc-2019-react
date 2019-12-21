class GridPrinter {
  constructor(grid, missing, invertY = false) {
    this.grid    = grid
    this.missing = missing
    this.invertY = invertY
  }

  // ========== PUBLIC ====================================

  print() {
    const { rangeX, rangeY } = this.getRanges()
    const [ x0, x1 ]         = rangeX
    const [ y0, y1 ]         = rangeY
    let   rows = []
    let   point

    for (let y = y0; y <= y1; y++) {
      const row = []
      for (let x = x0; x <= x1; x++) {
        point = this.grid[`${ x }|${ y }`] || this.missing
        row.push(point.render())
      }
      rows.push(`${ this.getRowId(y) }:     ${ row.join('') }`)
    }

    if (this.invertY) {
      rows = rows.reverse()
    }

    rows.forEach(row => console.log(row))
  }


  // ========== PRIVATE ===================================

  getRanges() {
    let points = Object.values(this.grid)
    let point  = points.shift()
    let x0     = point.x
    let x1     = point.x
    let y0     = point.y
    let y1     = point.y

    points.forEach(point => {
      if (point.x < x0) { x0 = point.x }
      if (point.x > x1) { x1 = point.x }
      if (point.y < y0) { y0 = point.y }
      if (point.y > y1) { y1 = point.y }
    })

    const rangeX = [x0, x1]
    const rangeY = [y0, y1]

    return { rangeX, rangeY }
  }

  getRowId(y) {
    return `     ${ y }`.slice(-3)
  }
}

export default GridPrinter
