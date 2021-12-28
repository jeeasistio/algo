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

const maximumDepthBinaryTreeDFS = (root: TreeNode | null) => {
  if (root === null) return 0
  const stack = []
  let maxDepth = 1

  stack.push([root, maxDepth])

  while (stack.length > 0) {
    const [currNode, currDepth] = stack.pop()
    
    if (currNode) {
      stack.push([currNode.left, currDepth + 1])
      stack.push([currNode.right, currDepth + 1])
      if (currNode.left === null && currNode.right === null) maxDepth = Math.max(maxDepth, currDepth)
    }
  }

  return maxDepth
}

console.log(maximumDepthBinaryTreeDFS(root))
