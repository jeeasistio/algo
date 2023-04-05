import { maxScore } from './maximum_cards'

describe('return the maximum score you can obtain from cards', () => {
    test.each([
        [[1, 2, 3, 4, 5, 6, 1], 3, 12],
        [[2, 2, 2], 2, 4],
        [[9, 7, 7, 9, 7, 7, 9], 7, 55],
    ])('should return max score', (cards, limit, expected) => {
        expect(maxScore(cards, limit)).toBe(expected)
    })
})
