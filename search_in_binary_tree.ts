class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val
    this.left = left === undefined ? null : left
    this.right = right === undefined ? null : right
  }
}

const eight = new TreeNode(8)
const seven = new TreeNode(7, eight)
const six = new TreeNode(6)
const five = new TreeNode(5, six, seven)
const four = new TreeNode(4)
const three = new TreeNode(3)
const two = new TreeNode(2, three, four)
const root = new TreeNode(1, two, five)

const searchInBinaryTree = (root: TreeNode | null, val: number): TreeNode | null => {
  if (root === null) return null

  if (val === root.val) return root
  
  if (root.val < val) return searchInBinaryTree(root.right, val)

  if (root.val > val) return searchInBinaryTree(root.left, val)
}

console.log(searchInBinaryTree(root, 7));