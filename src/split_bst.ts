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

const fiftyFive = new TreeNode(55)
const twentyFive = new TreeNode(25)
const sixty = new TreeNode(60, fiftyFive)
const thirtyFive = new TreeNode(35, twentyFive)
const ten = new TreeNode(10)
const fifty = new TreeNode(50, null, sixty)
const twenty = new TreeNode(20, ten, thirtyFive)
const root = new TreeNode(40, twenty, fifty)

const k = 35

const splitBST = (root: TreeNode, k: number) => {
  if (root === null) return [null, null]

  if (root.val < k) {
    const childSplit = splitBST(root.right, k)
    root.right = childSplit[0]
    return [root, childSplit[1]]
  } else {
    const childSplit = splitBST(root.left, k)
    root.left = childSplit[1]
    return [childSplit[0], root]
  }
}

console.log(splitBST(root, 35));