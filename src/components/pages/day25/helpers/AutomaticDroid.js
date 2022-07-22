import Computer from "../../../../lib/IntcodeComputer"
import Graph    from "node-dijkstra"
import Room     from "./Room"

// I stopped on this when I realised the rooms are not
// laid out on a simple grid. Some of the distances
// are not 1 and there's no good way to know that in
// advance.  So, the mapping technique below does not
// work. Didn't feel like reworking the whole thing.
//
class AutomaticDroid {
  constructor(program) {
    this.computer = new Computer([...program], true)
    this.rooms    = {}
    this.position = null

    this.worthlessItems = [
      'giant electromagnet',
      'infinite loop'
    ]
  }

  // ========== ACTIONS ===================================

  explore(commands = []) {
    this.performCommand("")
    commands.forEach(cmd => {
      this.performCommand(cmd)
    })
  }

  exploreAutomatically() {
    let room  = this.mapOrigin()
    let doors = this.getUnmappedDoors(room)

    let unmappedDoors = {}
    unmappedDoors[room.id()] = doors

    while (Object.keys(unmappedDoors).length) {
      const newUnmappedDoors = {}

      Object.keys(unmappedDoors).forEach(roomId => {
        console.log('---------------------------')
        console.log('moving to room...')
        room  = this.moveToRoom(roomId)
        console.log('  ', room)
        console.log('getting unmapped doors...')
        doors = unmappedDoors[roomId]
        console.log('  ', doors)

        console.log('looping unmapped doors...')
        doors.forEach(cmd => {
          console.log('moving forward ', cmd)
          const output   = this.performCommand(cmd)
          const newRoom  = this.processRoomFromOutput(output, room.idForDirection(cmd))
          const newDoors = this.getUnmappedDoors(newRoom)
          this.position  = newRoom.id()

          console.log(newRoom.getName())
          console.log(newRoom.id(), this.position)

          if (newDoors.length) {
            newUnmappedDoors[newRoom.id()] = newDoors
          }

          const icmd = room.invertCommand(cmd)
          console.log('moving back ', icmd)
          this.performCommand(icmd)
          this.position = roomId
        })
      })

      unmappedDoors = newUnmappedDoors
      console.log('-------------------------------')
      console.log("rooms", this.rooms)
      console.log("unmapped", unmappedDoors)
      console.log('-------------------------------')
    }
  }

  passCheckpoint() {
    // this.moveToCheckpoint()
    // this.dropAllItems()
    // try permuations
    // return passcode from parsed data in next room?
  }

  // ========== GRAPH =====================================

  buildGraph() {
    const graph  = new Graph()
    const dirs   = ['north', 'south', 'east', 'west']
    const rooms = Object.values(this.rooms)
    rooms.forEach(r => {
      const nodes = {}
      const rs    = dirs.map(d => this.rooms[r.idForDirection(d)]).filter(r => r)
      rs.forEach(r1 => nodes[r1.id()] = 1)
      graph.addNode(r.id(), nodes)
    })
    return graph
  }

  moveToRoom(roomId) {
    if (roomId == this.position) {
      return this.rooms[this.position]
    }

    const graph = this.buildGraph()
    const path  = graph.path(this.position, roomId)

    const cmds  = []
    for (let i=0; i < path.length - 1; i++) {
      const id1 = path[i]
      const id2 = path[i+1]
      const cmd = this.rooms[id1].directionForId(id2)

      cmds.push(cmd)
    }

    console.log('----------------')
    console.log('moveToRoom')
    console.log(this.position, roomId)
    console.log(path)
    console.log(cmds)
    console.log('----------------')

    cmds.forEach(cmd => {
      this.performCommand(cmd)
    })
    this.position = roomId

    return this.rooms[roomId]
  }

  // ========== ROOMS =====================================

  getUnmappedDoors(room) {
    return room.getDoors().filter(d => {
      const rid = room.idForDirection(d)
      return !this.rooms[rid]
    })
  }

  mapOrigin() {
    const output = this.performCommand("")
    const room   = this.processRoomFromOutput(output)

    this.position = room.id()

    return room
  }

  processRoomFromOutput(output, id="0|0") {
    // coords
    const [x, y] = id.split("|").map(c => parseInt(c))

    // name
    const name   = output.match(/== (.*) ==/)[1]

    // visual
    let visual = "."
    if (id == "0|0") {
      visual = 'O'
    }
    if (name == "Security Checkpoint") {
      visual = "X"
    }

    // doors
    let doors = []
    const doorMatch = output.match(/Doors here lead:\n([-\sa-z]*)\n\n/)
    if (doorMatch) {
      doors = doorMatch[1].split("\n").map(s => s.replace("- ", ""))
    }

    // items
    let items = []
    const itemMatch = output.match(/Items here:\n([-\sa-z]*)\n\n/)
    if (itemMatch) {
      const itemList = itemMatch[1].split("\n").map(s => s.replace("- ", ""))

      itemList.forEach(item => {
        // if (this.worthlessItems.includes(item)) {
          items.push(item)
        // }
        // else {
          // this.performCommand(`take ${ item }`)
        // }
      })
    }

    // map
    const room = new Room(x, y, visual, name, doors, items)
    this.rooms[room.id()] = room

    // return :)
    return room
  }

  // ========== COMPUTER ==================================

  performCommand(cmd) {
    const terminus   = [63,100,110,97,109,109,111,67].join(",")
    const input      = this.convertCommandToAscii(cmd)
    const output     = []
    let   processing = true

    while (processing) {
      const status = this.computer.run(input)
      const code   = this.computer.output.shift()
      output.unshift(code)

      if (output.slice(0, 8).join(",") == terminus || output.length > 5000) {
        processing = false
      }
    }

    const formatted = this.convertAsciiToPrintable(output.reverse())
    console.log(formatted)

    return formatted
  }

  // ========== UTILITIES =================================

  convertAsciiToPrintable(output) {
    const chars = output.map(n => {
      if (n < 256) {
        return String.fromCharCode(n)
      }
      return n
    })

    return chars.join('')
  }

  convertCommandToAscii(cmd) {
    return cmd.toString().split('').map(s => s.charCodeAt(0)).concat([10])
  }
}

export default AutomaticDroid
