const Arrays = {
  sum(array) {
    return array.reduce((sum, item) => sum += item, 0)
  },

  toChunks(str, size) {
    const regex = new RegExp(`.{1,${ size }}`, 'g')
    return str.match(regex)
  },

  toCrossProduct(c1, c2) {
    let result = []
    c1.forEach(i1 => {
      c2.forEach(i2 => {
        result.push([i1, i2])
      })
    })
    return result
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
  },

  toHash(array) {
    let hash = {}
    array.forEach((val, i) => {
      hash[i] = val
    })
    return hash
  }
}

export default Arrays
