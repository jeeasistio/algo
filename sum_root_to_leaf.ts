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

const sumRootToLeaf = (root: TreeNode | null) => {
  if (root.val === null) return
  let paths = []

  dfs(root, '', paths)
  return paths.reduce((sum, val) => sum += +val, 0)
}

const dfs = (root: TreeNode | null, path: string, paths: string[]) => {
  path += root.val

  if (root.left === null && root.right === null) {
    paths.push(path)
    return
  }
  
  
  if (root.left !== null) dfs(root.left, path, paths)
  
  if (root.right !== null) dfs(root.right, path, paths)
}

console.log(sumRootToLeaf(root));