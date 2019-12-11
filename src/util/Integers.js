const Integers = {
  greatestCommonDivisor(i1, i2) {
    if (i1 === 0 && i2 === 0) {
      return 1
    }
    if (i1 === 0 || i2 === 0) {
      [i1, i2].sort().pop()
    }
    i1 = Math.abs(i1)
    i2 = Math.abs(i2)
    while(i2) {
      const tmp = i2;
      i2  = i1 % i2;
      i1  = tmp;
    }
    return i1;
  }
}

export default Integers
