import Compound from "./Compound"

class Factory {
  constructor(data) {
    this.reactions = this.parseReactions(data)
  }

  // ========== PUBLIC ====================================

  maximumFuelProduced(ore = 1000000000000) {
    let fuel        = 0
    let oreRequired = 0
    let stocks      = {}

    let count = 0
    while (ore > 0) {
      if (count % 100000 === 0) { console.log(count) }
      [oreRequired, stocks] = this.minimumOreRequired(stocks)
      if (ore > oreRequired) {
        fuel += 1
      }
      ore += -oreRequired
      count += 1
    }
    return fuel
  }

  minimumOreRequired(stocks = []) {
    const oreElements   = this.getOreElements()
    let   fuelReagents  = this.reactions['FUEL'].reagents
    let   oreReagents   = []

    while (fuelReagents.length > 0) {
      const [good, bad, spare] = this.translateReagents(fuelReagents, oreElements, stocks)
      const compGood  = this.compressReagents(oreReagents.concat(good))
      const compBad   = this.compressReagents(bad)

      oreReagents  = compGood
      fuelReagents = compBad
      stocks       = spare
    }

    // eslint-disable-next-line no-unused-vars
    const [_, oreCompounds, spare] = this.translateReagents(oreReagents, ["ORE"], stocks)
    const oreCompound = this.compressReagents(oreCompounds)[0]
    return [oreCompound.coefficient, spare]
  }

  // ========== PRIVATE ===================================

  compressReagents(reagents) {
    let compHash = reagents.reduce((hash, r) => {
      if (!hash[r.element]) {
        hash[r.element] = 0
      }
      hash[r.element] = hash[r.element] + r.coefficient
      return hash
    }, {})

    return Object.entries(compHash).reduce((arr, [k, v]) => {
      arr.push(new Compound(v, k))
      return arr
    }, [])
  }

  getOreElements() {
    return Object.values(this.reactions).reduce((arr, r) => {
      if (r.reagents.some(c => c.element === 'ORE')) {
        arr.push(r.product.element)
      }
      return arr
    }, [])
  }

  parseReactions(rows) {
    const hash = {}
    rows.forEach(row => {
      const [left, right] = row.split(' => ')
      const reagents = left.split(', ').map(s => {
        const [coeff, elem] = s.split(' ')
        return new Compound(coeff, elem)
      })
      const [coeff, elem] = right.split(' ')
      const product  = new Compound(coeff, elem)

      hash[product.element] = { reagents, product }
    })
    return hash
  }

  translateReagents(reagents, goodElements, stocks = {}) {
    const good  = []
    const bad   = []
    const spare = stocks
    reagents.forEach(r => {
      if (goodElements.includes(r.element)) {
        good.push(r)
      } else {
        const formula   = this.reactions[r.element]
        const fProduct  = formula.product
        const fReagents = formula.reagents

        const spare     = stocks[r.element] || 0
        const needed    = r.coefficient - spare

        if (needed >= 0) {
          const factor    = Math.ceil(needed / fProduct.coefficient)
          const excess   = (fProduct.coefficient * factor) - needed

          fReagents.forEach(rr => {
            const c = new Compound(rr.coefficient * factor, rr.element)
            bad.push(c)
          })
          stocks[r.element] = excess
        } else {
          stocks[r.element] = -needed
        }
      }
    })
    return [good, bad, spare]
  }
}

export default Factory
