import Image from "./Image"

class Runner {
  constructor(data) {
    this.image = new Image(25, 6, data)
  }

  compute(part) {
    if (part === "1") {
      return this.image.checksum()
    }
    return this.image.render()
  }
}
export default Runner
