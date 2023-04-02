import { possibleBipartition } from './possible_bipartition'

describe('return true if it is possible to split everyone into two groups in this way', () => {
    test.each([
        [
            4,
            [
                [1, 2],
                [1, 3],
                [2, 4],
            ] as [number, number][],
            true,
        ],
        [
            3,
            [
                [1, 2],
                [1, 3],
                [2, 3],
            ] as [number, number][],
            false,
        ],
    ])('should return true if possible', (num, dislikes, expected) => {
        expect(possibleBipartition(num, dislikes)).toBe(expected)
    })
})
