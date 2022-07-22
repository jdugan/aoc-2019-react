import Droid from './Droid'

class Runner {
  constructor(program) {
    this.program = program
  }

  compute(part) {
    if (part === "1") {
      return this.findPassword()
    }
    return -2
  }

  // ========== RUNNERS ===================================

  findPassword() {
    const droid  = new Droid([...this.program], true)
    const cmds   = this.getExploreCommands()

    droid.explore(cmds)
    const password = droid.passCheckpoint("east")

    return password
  }

  // ========== HELPERS ===================================

  getExploreCommands() {
    return [
      "west",
      "west",
      "take loom",
      "east",
      "east",
      "north",
      "north",
      "take mutex",
      "east",
      "take tambourine",
      "west",
      "south",
      "west",
      "take antenna",
      "south",
      "take hologram",
      "south",
      "take mug",
      "north",
      "west",
      "take astronaut ice cream",
      "east",
      "north",
      "north",
      "north",
      "north",
      "take space heater",
      "north",
      "east",
      "inv",
      "east"
    ]
  }
}
export default Runner
