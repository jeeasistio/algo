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

const rangeSumBinaryTree = (root: TreeNode, low: number, high: number) => {
  if (root === null ||root === undefined) return 0
  if (root.val < low || root.val > high) return rangeSumBinaryTree(root.left, low, high) + rangeSumBinaryTree(root.right, low, high)
  if (root.val >= low && root.val <= high)return root.val + rangeSumBinaryTree(root.left, low, high) + rangeSumBinaryTree(root.right, low, high)
}

console.log(rangeSumBinaryTree(root, 2, 10));