const Strings = {
  toChunks(str, size) {
    const regex = new RegExp(`.{1,${ size }}`, 'g')
    return str.match(regex)
  }
}

export default Strings
