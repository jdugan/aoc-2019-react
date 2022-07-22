import Network from './Network'

class Runner {
  constructor(program) {
    this.program = program
    this.packet  = null
  }

  compute(part) {
    if (part === "1") {
      return this.firstNatPacketReceived()
    }
    return this.firstNatPacketSentTwice()
  }

  // ========== RUNNERS ===================================

  firstNatPacketReceived() {
    const network = new Network(50, this.program)
    const packet  = network.firstNatPacketReceived()

    return packet[2]
  }

  firstNatPacketSentTwice() {
    const network = new Network(50, this.program)
    const packet  = network.firstNatPacketSentTwice()

    return packet[2]
  }
}
export default Runner
