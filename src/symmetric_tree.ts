import { TreeNode } from './types/TreeNode'

export const isSymmetric = (root: TreeNode | null): boolean => {
    return checkIfSymmetric(root?.left ?? null, root?.right ?? null)
}

const checkIfSymmetric = (left: TreeNode | null, right: TreeNode | null): boolean => {
    if (left === null && right === null) return true
    if (left && right) {
        if (
            left.val === right.val &&
            checkIfSymmetric(left.left, right.right) &&
            checkIfSymmetric(left.right, right.left)
        )
            return true
    }
    return false
}
