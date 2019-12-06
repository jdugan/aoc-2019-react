import TreeNode from "../../../../lib/TreeNode"

class Runner {
  constructor(orbits) {
    this.orbitTree = this.buildOrbitTree(orbits)
    this.rootNode  = this.getRootNode()
  }

  compute(part) {
    if (part === "1") {
      return this.checksum()
    }
    return this.transfersNeeded()
  }

  // ========== RUNNERS ===================================

  checksum() {
    this.calculateDistances()
    return Object.values(this.orbitTree).reduce((sum, n) => sum += n.distance, 0)
  }

  transfersNeeded() {
    const san       = this.orbitTree["SAN"]
    const sanParent = this.orbitTree[san.parentId]
    const you       = this.orbitTree["YOU"]
    const youParent = this.orbitTree[you.parentId]

    return this.transfersBetweenNodes(sanParent, youParent)
  }

  // ========== HELPERS ===================================

  buildOrbitTree(orbits) {
    return orbits.reduce((hash, orbit) => {
      const [id1, id2] = orbit.split(')')
      const n1 = hash[id1] || new TreeNode(id1)
      const n2 = hash[id2] || new TreeNode(id2)

      n1.childIds.add(n2.id)
      n2.parentId = n1.id
      hash[n1.id] = n1
      hash[n2.id] = n2

      return hash
    }, {})
  }

  calculateDistances() {
    const root = this.rootNode
    Object.values(this.orbitTree).forEach(node => {
      node.distance = this.pathBetweenNodes(node, root).length
    })
  }

  getRootNode() {
    return Object.values(this.orbitTree).filter(n => !n.parentId)[0]
  }

  pathBetweenNodes(from, to) {
    if (from && to) {
      const path = []
      while (from && from.parentId && from.id !== to.id) {
        from = this.orbitTree[from.parentId]
        path.push(from)
      }
      return path
    }
    return []
  }

  transfersBetweenNodes(from, to) {
    const root = this.rootNode

    const fromPath = this.pathBetweenNodes(from, root)
    const toPath   = this.pathBetweenNodes(to, root)
    const ancestor = fromPath.filter(id => toPath.includes(id))[0]

    const d1 = this.pathBetweenNodes(from, ancestor).length
    const d2 = this.pathBetweenNodes(to, ancestor).length

    return d1 + d2
  }
}
export default Runner
