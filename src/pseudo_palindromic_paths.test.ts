import { pseudoPalindromicPaths } from './pseudo_palindromic_paths'
import { generateTreeFromArr } from './helpers/binary_tree'

describe('return the number of pseudo-palindromic paths going from the root node to leaf nodes', () => {
    test.each([
        [[2, 3, 1, 3, 1, null, 1], 2],
        [[2, 1, 1, 1, 3, null, null, null, null, null, 1], 1],
    ])('should return number of palindromic paths', (root, expected) => {
        expect(pseudoPalindromicPaths(generateTreeFromArr(root))).toBe(expected)
    })

    test('should return 1 when only one node', () => {
        expect(pseudoPalindromicPaths(generateTreeFromArr([1]))).toBe(1)
    })
})
