import { numClosedIslands } from './number_of_closed_islands'

describe('return number of closed islands', () => {
    test.each([
        [
            [
                [1, 1, 1, 1, 1, 1, 1, 0],
                [1, 0, 0, 0, 0, 1, 1, 0],
                [1, 0, 1, 0, 1, 1, 1, 0],
                [1, 0, 0, 0, 0, 1, 0, 1],
                [1, 1, 1, 1, 1, 1, 1, 0],
            ],
            1,
        ],
        [
            [
                [0, 0, 1, 0, 0],
                [0, 1, 0, 1, 0],
                [0, 1, 1, 1, 0],
            ],
            2,
        ],
    ])('should return number of closed islands', (grid, expected) => {
        expect(numClosedIslands(grid)).toBe(expected)
    })
})
