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

const nine = new TreeNode(9)
const eight = new TreeNode(8, nine)
const seven = new TreeNode(7, eight)
const six = new TreeNode(6)
const five = new TreeNode(5, six, seven)
const four = new TreeNode(4)
const three = new TreeNode(3)
const two = new TreeNode(2, three, four)
const root = new TreeNode(1, two, five)

const minimumDepthRecursive = (root: TreeNode | null) => {
  if (root === null) return 0

  if (root.left === null || root.right === null) {
    return (
      Math.max(
        minimumDepthRecursive(root.left),
        minimumDepthRecursive(root.right)
      ) + 1
    )
  }

  const leftDepth = minimumDepthRecursive(root.left)
  const rightDepth = minimumDepthRecursive(root.right)

  return (
    (root.left === null || root.right === null
      ? Math.max(leftDepth, rightDepth) + 1
      : Math.min(leftDepth, rightDepth)) + 1
  )
}

console.log(minimumDepthRecursive(two))

const minimumDepthBFS = (root: TreeNode | null) => {
  if (root === null) return 0
  const queue = []

  queue.push([root, 1])

  while (queue.length > 0) {
    const [currNode, currDepth] = queue.shift()

    if (currNode) {
      queue.push([currNode.left, currDepth + 1])
      queue.push([currNode.right, currDepth + 1])
      if (currNode.left === null && currNode.right === null)
        return currDepth
    }
  }
}

console.log(minimumDepthBFS(two))
