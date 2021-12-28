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

const mergeTwoBinaryTrees = (
  root1: TreeNode | null,
  root2: TreeNode | null
): TreeNode | null => {
  if (root1 === null && root2 === null) return null

  let v1: number , v2: number

  v1 = root1 === null ? 0 : root1.val
  v2 = root2 === null ? 0 : root2.val
  const newRoot = new TreeNode(v1 + v2)

  newRoot.left = mergeTwoBinaryTrees(root1 === null ? null : root1.left, root2 === null ? null : root2.left)
  newRoot.right = mergeTwoBinaryTrees(root1 === null ? null : root1.right, root2 === null ? null : root2.right)

  return newRoot
}

console.log(mergeTwoBinaryTrees(root, root));