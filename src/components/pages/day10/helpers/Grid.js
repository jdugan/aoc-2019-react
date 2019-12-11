import Asteroid    from "./Asteroid"
import IntegerUtil from "../../../../util/Integers"

class Grid {
  constructor(rows) {
    this.width  = rows[0].split('').length
    this.height = rows.length

    this.points = this.trackPoints(rows)
    this.base   = this.bestDetector()
  }

  // ========== PUBLIC ====================================

  mostObservations() {
    const base = this.bestDetector()
    return base.getObservationCount()
  }

  vaporisationChecksum() {
    const base   = this.bestDetector()
    const points = this.sortObservations(base)
    const [x, y] = points[199].split('|').map(s => parseInt(s))
    return (100 * x) + y
  }

  // ========== PRIVATE ===================================

  bestDetector() {
    Object.values(this.points).forEach(p => {
      this.calculateObservationsFor(p)
    })
    const sorted = Object.values(this.points).sort((a,b) => {
      const ac = a.getObservationCount()
      const bc = b.getObservationCount()
      if (ac < bc) { return  1 }
      if (ac > bc) { return -1 }
      return 0
    })
    return sorted[0]
  }

  calculateObservationsFor(point) {
    const observations = {}
    const points       = Object.values(this.points)

    const nw = points.filter(p => p.y <= point.y && p.x <= point.x && p.id() !== point.id())
    const se = points.filter(p => p.y >  point.y && p.x >  point.x).reverse()
    const ne = points.filter(p => p.y <= point.y && p.x >  point.x).sort((a, b) => {
      if (a.y > b.y) { return 1  }
      if (a.y < b.y) { return -1 }
      if (a.x < b.x) { return 1  }
      if (a.x > b.x) { return -1 }
      return 0
    })
    const sw = points.filter(p => p.y >  point.y && p.x <= point.x).sort((a, b) => {
      if (a.y < b.y) { return 1  }
      if (a.y > b.y) { return -1 }
      if (a.x > b.x) { return 1  }
      if (a.x < b.x) { return -1 }
      return 0
    })
    const possibles = nw.concat(ne).concat(se).concat(sw)

    possibles.forEach(possible => {
      const dx   = point.x - possible.x
      const dy   = point.y - possible.y
      const hcd  = IntegerUtil.greatestCommonDivisor(dx, dy)
      const vx   = dx / hcd
      const vy   = dy / hcd

      const path = [possible]
      let   x0   = possible.x + vx
      let   y0   = possible.y + vy
      let   p0   = this.points[`${ x0 }|${ y0 }`]

      while (x0 !== point.x || y0 !== point.y) {
        if (p0) {
          path.push(p0)
        }
        x0 = x0 + vx
        y0 = y0 + vy
        p0  = this.points[`${ x0 }|${ y0 }`]
      }

      if (path.length) {
        const seen = path.pop()
        observations[seen.id()] = true
        path.forEach(p => observations[p.id()] = false)
      } else {
        console.log(`PATH EMPTY: ${ point.id() }`)
      }
    })

    Object.entries(observations).forEach(([k, v]) => {
      if (!!v) { point.addObservation(k) }
    })
  }

  sortObservations(base) {
    const angles = []
    const bx     = base.x
    const by     = base.y

    for (let id of base.meta.observations) {
      const [ax, ay] = id.split('|').map(s => parseInt(s))
      const dx = Math.abs(ax - bx)
      const dy = Math.abs(ay - by)

      let angle
      if (dx === 0) {
        angle = (ay > by) ? 180 : 0
      } else if (dy === 0) {
        angle = (ax > bx) ? 90 : 270
      } else {
        let slope = (dy / dx)
        if (ax > bx && ay < by) {
          if (slope >= 1) {
            angle = 0 + (1 / slope) * 45          // 0 - 45
          } else {
            angle = 90 - (slope * 45)             // 45 - 90
          }
        }
        if (ax > bx && ay > by) {
          if (slope <= 1) {
            angle = 90 + (slope * 45)             // 90 - 135
          } else {
            angle = 180 - ((1 / slope) * 45)      // 135 - 180
          }
        }
        if (ax < bx && ay > by) {
          if (slope >= 1) {
            angle = 180 + ((1 / slope) * 45)      // 180 - 225
          } else {
            angle = 270 - (slope * 45)            // 225 - 270
          }
        }
        if (ax < bx && ay < by) {
          if (slope <= 1) {
            angle = 270 + (slope * 45)            // 270 - 315
          } else {
            angle = 360 - ((1 / slope) * 45)      // 315 - 360
          }
        }
      }
      angles.push({ id, angle })
    }

    const sorted = angles.sort((a,b) => {
      if (a.angle > b.angle) { return 1  }
      if (a.angle < b.angle) { return -1 }
      return 0
    })
    return sorted.map(o => o.id)
  }

  trackPoints(rows) {
    let points = {}
    rows.forEach((row, y) => {
      const columns = row.split('')
      columns.forEach((col, x) => {
        if (col === '#') {
          const point = new Asteroid(x, y)
          points[point.id()] = point
        }
      })
    })
    return points
  }
}

export default Grid
