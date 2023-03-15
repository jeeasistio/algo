import { generateTreeFromArr } from './binary_tree'
import { TreeNode } from '../types/TreeNode'

describe('generate binary tree from array', () => {
    let zero: TreeNode,
        one: TreeNode,
        two: TreeNode,
        three: TreeNode,
        four: TreeNode,
        five: TreeNode,
        six: TreeNode,
        seven: TreeNode,
        eight: TreeNode

    beforeEach(() => {
        eight = new TreeNode(8)
        seven = new TreeNode(7)
        six = new TreeNode(6)
        five = new TreeNode(5)
        four = new TreeNode(4)
        three = new TreeNode(3)
        two = new TreeNode(2)
        one = new TreeNode(1)
        zero = new TreeNode(0)
    })

    test('should generate', () => {
        zero.left = one
        zero.right = two
        one.left = three
        one.right = four
        two.left = five
        two.right = six
        three.left = seven
        three.right = eight
        const root = zero
        expect(generateTreeFromArr([0, 1, 2, 3, 4, 5, 6, 7, 8])).toStrictEqual(root)
    })

    test('should generate with spaces', () => {
        zero.left = one
        zero.right = two
        one.left = three
        two.left = five
        two.right = six
        three.right = eight
        const root = zero
        expect(generateTreeFromArr([0, 1, 2, 3, null, 5, 6, null, 8])).toStrictEqual(root)
    })
})
