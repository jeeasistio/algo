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

const one = new TreeNode(1)
const two = new TreeNode(2)
const seven = new TreeNode(7)
const four2 = new TreeNode(4, null, one)
const thirteen = new TreeNode(13)
const eleven = new TreeNode(11, seven, two)
const eight = new TreeNode(8, thirteen, four2)
const four = new TreeNode(4, eleven)
export const root = new TreeNode(5, four ,eight)
export const targetSum = 22

const pathSum = (root: TreeNode, targetSum: number, sum = 0): boolean => {
  if (root === null) return false
  sum += root.val

  if (root.left === null && root.right === null && sum === targetSum) return true

  if (root.left !== null && pathSum(root.left, targetSum, sum)) return true

  if (root.right !== null && pathSum(root.right, targetSum, sum)) return true

  return false
}

console.log(pathSum(root, targetSum));

export default pathSum