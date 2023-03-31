import { minimumCost } from './minimum_cost_for_tickets'

describe('should return the minimum cost of tickets', () => {
    test.each([
        [[1, 4, 6, 7, 8, 20], [2, 7, 15] as [number, number, number], 11],
        [
            [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 30, 31],
            [2, 7, 15] as [number, number, number],
            17,
        ],
    ])('should return the minimum cost of tickets', (days, costs, expected) => {
        expect(minimumCost(days, costs)).toBe(expected)
    })
})
