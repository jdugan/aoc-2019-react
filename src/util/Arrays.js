const Arrays = {
  sum(array) {
    return array.reduce((sum, item) => sum += item, 0)
  },

  toChunks(str, size) {
    const regex = new RegExp(`.{1,${ size }}`, 'g')
    return str.match(regex)
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
