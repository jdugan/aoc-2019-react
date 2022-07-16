const data = {
  "1":  [true, true],
  "2":  [true, true],
  "3":  [true, true],
  "4":  [true, true],
  "5":  [true, true],
  "6":  [true, true],
  "7":  [true, true],
  "8":  [true, true],
  "9":  [true, true],
  "10": [true, true],
  "11": [true, true],
  "12": [true, true],
  "13": [true, true],
  "14": [true, true],
  "15": [true, true],
  "16": [true, true],
  "17": [true, true],
  "18": [true, true],
  "19": [true, false],
  "20": [true, false],
  "21": [false, false],
  "22": [true, true],
  "23": [false, false],
  "24": [true, false],
  "25": [false, false],
}

const store = {
  days() {
    return Object.keys(data)
  },

  starCount() {
    const countFn = (sum, array) => sum + array.filter(bool => bool).length
    return Object.values(data).reduce(countFn, 0)
  },

  starCountForDay(day) {
    return (data[day] || []).filter(bool => bool).length
  }
}

export default store;
