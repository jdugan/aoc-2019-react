import Point   from "./Point"
import Printer from "../../../../lib/GridPrinter"

class Maze {
  constructor(data) {
    this.data    = data
    this.grid    = this.buildGrid()
    this.portals = this.buildPortalMap()
  }

  // ========== GRID ======================================

  // only bother to record paths to simplify creating
  // the graphs later.
  //
  buildGrid() {
    const grid = {}
    let   point
    this.data.forEach((row, y) => {
      row.split('').forEach((visual, x) => {
        point = new Point(x, y, visual)
        if (point.isPath()) {
          grid[point.id()] = point
        }
      })
    })
    return grid
  }


  // ========== PORTALS ===================================

  // locate all portals and associate names with
  // x,y coordinates (i.e., ignore z-plane here)
  //
  buildPortalMap() {
    const h_rows  = [...this.data]
    const v_rows  = this.invertData(h_rows)
    let   portals = {}

    portals = this.buildPortalMapFromRows(portals, h_rows, false)
    portals = this.buildPortalMapFromRows(portals, v_rows, true)

    return portals
  }

  // main parse function for portal mapping; inverted rows are
  // vertical rather than horizontal
  //
  buildPortalMapFromRows(hash, rows, isInverted) {
    const regex  = /^([A-Z]{2}|\s{2})[.#]*([A-Z]{2}|\s{2})\s*([A-Z]{2}|\s{2})[.#]*([A-Z]{2}|\s{2})$/
    let   index
    let   key

    for (let i = 0; i < rows.length; i++) {
      const row     = rows[i]
      const matches = row.match(regex)

      if (matches) {
        const name1 = matches[1].toString().trim()
        const name2 = matches[2].toString().trim()
        const name3 = matches[3].toString().trim()
        const name4 = matches[4].toString().trim()

        hash[name1] = hash[name1] || {}
        hash[name2] = hash[name2] || {}
        hash[name3] = hash[name3] || {}
        hash[name4] = hash[name4] || {}
        delete(hash[""])

        if (name1.length === 2) {
          index = 2
          key   = (isInverted) ? `${ i }|${ index }` : `${ index }|${ i }`
          hash[name1].outer = key
        }
        if (name2.length === 2) {
          index = row.slice(2, -2).indexOf(name2) + 1 // i.e., + 2 - 1
          key   = (isInverted) ? `${ i }|${ index }` : `${ index }|${ i }`
          hash[name2].inner = key
        }
        if (name3.length === 2) {
          index = row.slice(2, -2).indexOf(name3) + 4 // i.e., + 2 + 2
          key   = (isInverted) ? `${ i }|${ index }` : `${ index }|${ i }`
          hash[name3].inner = key
        }
        if (name4.length === 2) {
          index = row.length - 3
          key   = (isInverted) ? `${ i }|${ index }` : `${ index }|${ i }`
          hash[name4].outer = key
        }
      }
    }

    return hash
  }

  getPortalPartnerId(point) {
    const name = point.getName()
    const hash = this.portals[name]
    const id   = (hash.outer === point.id()) ? hash.inner : hash.outer

    return id
  }

  // ========== DATA ======================================

  // makes it easier to trap vertical portals; can treat
  // them the same as horizontal portals.
  //
  invertData(input) {
    const xSize = input[0].split('').length
    const ySize = input.length
    const output = Array(xSize).fill("")
    for (let y = 0; y < ySize; y++) {
      input[y].split('').forEach((val, x) => {
        output[x] += val
      })
    }
    return output
  }

  // ========== RENDERING =================================

  print() {
    const printer = new Printer(this.grid, '#')
    printer.print()
  }
}

export default Maze
