import { generateTreeFromArr } from './helpers/binary_tree'
import { TreeNode } from './types/TreeNode'

export const pseudoPalindromicPaths = (node: TreeNode | null, currPath: Record<number, number> = {}): number => {
    if (node === null) return 0
    let total = 0
    const currPathCopy = { ...currPath }
    if (currPathCopy[node.val] === 1) {
        delete currPathCopy[node.val]
    } else {
        currPathCopy[node.val] = 1
    }
    total += pseudoPalindromicPaths(node.left, currPathCopy)
    total += pseudoPalindromicPaths(node.right, currPathCopy)
    if (node.left === null && node.right === null && Object.keys(currPathCopy).length <= 1) total += 1
    return total
}

console.log(pseudoPalindromicPaths(generateTreeFromArr([2, 3, 1, 3, 1, null, 1])))