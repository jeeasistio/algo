import { TreeNode } from '../types/TreeNode'
import { NonEmptyArray } from '../types/utils'

export const generateTreeFromArr = (arr: NonEmptyArray<number | null>): TreeNode | null => {
    if (arr[0] === null) return null
    const root = arr[0]
    const rootNode = new TreeNode(root)

    arr.forEach((item, index) => {
        if (index === 0 || item === null) return
        const parentIndex = Math.floor((index - 1) / 2)
        const parentNode = getNodeByIndex(rootNode, parentIndex)
        const newNode = new TreeNode(item)
        if (index % 2 === 1) return (parentNode.left = newNode)
        parentNode.right = newNode
    })

    return rootNode
}

const getNodeByIndex = (node: TreeNode | null, index: number) => {
    if (index === 0 || node === null) return node
    if (index % 2 === 1) return getNodeByIndex(node.left, Math.floor(index / 2))
    return getNodeByIndex(node.right, Math.floor(index / 2) - 1)
}
