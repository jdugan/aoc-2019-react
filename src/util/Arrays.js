const Arrays = {

  // ========== ARITHMETIC ================================

  product(array) {
    return array.reduce((product, item) => product = product * item, 1)
  },

  sum(array) {
    return array.reduce((sum, item) => sum = sum + item, 0)
  },


  // ========== TRANSFORMATIONS ===========================

  toCrossProduct(c1, c2) {
    let result = []
    c1.forEach(i1 => {
      c2.forEach(i2 => {
        result.push([i1, i2])
      })
    })
    return result
  },

  toHash(array) {
    let hash = {}
    array.forEach((val, i) => {
      hash[i] = val
    })
    return hash
  },

  toPermutations(collection) {
    const results = []
    if (collection.length === 1) {
      results.push(collection)
      return results
    }
    collection.forEach((item, i) => {
      const rest  = collection.slice(0, i).concat(collection.slice(i + 1))
      const perms = Arrays.toPermutations(rest)
      perms.forEach(p => {
        results.push([item].concat(p))
      })
    })
    return results
  }
}

export default Arrays
