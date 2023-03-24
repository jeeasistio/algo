import { reorderRoutesToZero } from './reorder_routes_to_zero'

describe('return the number of routes to be change to to make all paths lead to zero', () => {
    test.each([
        [
            6,
            [
                [0, 1],
                [1, 3],
                [2, 3],
                [4, 0],
                [4, 5],
            ] as [number, number][],
            3,
        ],
        [
            5,
            [
                [1, 0],
                [1, 2],
                [3, 2],
                [3, 4],
            ] as [number, number][],
            2,
        ],
        [
            3,
            [
                [1, 0],
                [2, 0],
            ] as [number, number][],
            0,
        ],
    ])('should return number the number of routes to be changed', (num, connections, expected) => {
        expect(reorderRoutesToZero(num, connections)).toBe(expected)
    })
})
