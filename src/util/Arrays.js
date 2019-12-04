const Arrays = {
  sum(array) {
    return array.reduce((sum, item) => sum += item, 0)
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
