import { generateTreeFromArr } from './helpers/binary_tree'
import { isSymmetric } from './symmetric_tree'

describe('check if the tree is symmetric', () => {
    test('should return true', () => {
        expect(isSymmetric(generateTreeFromArr([1, 2, 2, 3, 4, 4, 3]))).toBe(true)
    })

    test('should return false', () => {
        expect(isSymmetric(generateTreeFromArr([1, 2, 2, null, 3, null, 3]))).toBe(false)
    })
})
