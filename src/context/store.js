const data = {
  "1":  [true, true],
  "2":  [true, true],
  "3":  [true, true],
  "4":  [true, true],
  "5":  [false, false],
  "6":  [false, false],
  "7":  [false, false],
  "8":  [false, false],
  "9":  [false, false],
  "10": [false, false],
  "11": [false, false],
  "12": [false, false],
  "13": [false, false],
  "14": [false, false],
  "15": [false, false],
  "16": [false, false],
  "17": [false, false],
  "18": [false, false],
  "19": [false, false],
  "20": [false, false],
  "21": [false, false],
  "22": [false, false],
  "23": [false, false],
  "24": [false, false],
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
