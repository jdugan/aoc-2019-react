class TreeNode {
  constructor(id, parentId = null, childIds = new Set()) {
    this.id       = id
    this.parentId = parentId
    this.childIds = childIds
    this.distance = 0
  }
}

export default TreeNode
