class Runner {
  constructor(data) {
    this.low  = data[0]
    this.high = data[1]
  }

  compute(part) {
    if (part === "1") {
      return this.approximateMatches().size
    }
    return this.exactMatches().size
  }

  // ========== RUNNERS ===================================

  approximateMatches() {
    const possibles = new Set()
    for(let n = this.low; n <= this.high; n++) {
      const r1 = this.isAscending(n)
      const r2 = this.hasDuplicate(n)

      if (r1 && r2) {
        possibles.add(n)
      }
    }
    return possibles
  }

  exactMatches() {
    let   exacts    = new Set()
    const possibles = [...this.approximateMatches()]
    possibles.forEach(p => {
      if (this.hasDouble(p)) {
        exacts.add(p)
      }
    })
    return exacts
  }

  // ========== HELPERS ===================================

  hasDouble(n) {
    const digits = n.toString().split("")
    const map    = {}
    digits.forEach(d => {
      if (!map.hasOwnProperty(d)) {
        map[d] = 1
      } else {
        map[d] = map[d] + 1
      }
    })
    return Object.values(map).includes(2)
  }

  hasDuplicate(n) {
    const raw    = n.toString()
    const digits = new Set(raw.split(""))
    const uniq   = [...digits].join("")
    return raw.length > uniq.length
  }

  isAscending(n) {
    const raw    = n.toString()
    const sorted = raw.split('').sort().join("")
    return raw === sorted
  }

}
export default Runner
