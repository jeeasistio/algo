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

const sumRootToLeaf = (root: TreeNode | null, path = '', paths = []) => {
  if (root === null) return null
  path += root.val

  if (root.left === null && root.right === null) paths.push(path)
  
  if (root.left !== null) sumRootToLeaf(root.left, path, paths)
  
  if (root.right !== null) sumRootToLeaf(root.right, path, paths)

  return paths.reduce((sum, val) => sum += +val, 0)
}

console.log(sumRootToLeaf(root));