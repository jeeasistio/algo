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

const arr = [-10,-3,0,5,9]

const convertSortedArrayToBST = (arr: number[]) => {
  if (arr.length === 0) return null
  return constructBST(arr, 0,arr.length - 1)
}

const constructBST = (arr: number[], left: number, right: number) => {
  if (left > right) return null
  const newNode = new TreeNode()
  const mid = Math.round(left + (right - left) / 2)

  newNode.val = arr[mid]

  newNode.left = constructBST(arr, left, mid - 1)
  newNode.right = constructBST(arr, mid + 1, right)

  return newNode
}

console.log(convertSortedArrayToBST(arr));