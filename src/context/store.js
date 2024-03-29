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
  "19": [true, true],
  "20": [true, true],
  "21": [true, true],
  "22": [true, true],
  "23": [true, true],
  "24": [true, true],
  "25": [true, true],
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
