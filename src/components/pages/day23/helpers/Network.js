import Controller from './Controller'

class Network {
  constructor(size, program) {
    this.controllers = this._initialiseControllers(size, program)
    this.natPacket   = null
  }

  // ========== RUNNERS ===================================

  firstNatPacketReceived() {
    while (!this.natPacket) {
      this.invokeControllers()
    }
    return this.natPacket
  }

  firstNatPacketSentTwice() {
    let lastNatPacketY
    let halt

    while (!halt) {
      const idle = this.invokeControllers()
      if (idle) {
        if (lastNatPacketY === this.natPacket[2]) {
          halt = true
        } else {
          this.controllers[0].queue.push(this.natPacket[1])
          this.controllers[0].queue.push(this.natPacket[2])
          lastNatPacketY = this.natPacket[2]
        }
      }
    }

    return this.natPacket
  }

  // ========== OPERATIONS ================================

  invokeControllers() {
    // get new packets
    let packets = []
    this.controllers.forEach(c => {
      const output = c.run()
      if (output.length) {
        packets.push(output)
      }
    })

    // apply new packets
    packets.forEach(packet => {
      const [addr, x, y] = packet

      if (addr === 255) {
        this.natPacket = packet
      } else {
        this.controllers[addr].queue.push(x)
        this.controllers[addr].queue.push(y)
      }
    })

    // determine state and return
    const idle = (packets.length === 0)
    return idle
  }

  // ========== CONSTRUCTION ==============================

  _initialiseControllers(size, program) {
    const controllers = []
    for (let addr=0; addr < size; addr++) {
      const c = new Controller(addr, program)
      controllers.push(c)
    }
    return controllers
  }
}

export default Network
