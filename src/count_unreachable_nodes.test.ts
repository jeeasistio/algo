import { countUnreachableNodes } from './count_unreachable_nodes'

describe('return the number of pairs of different nodes that are unreachable from each other', () => {
    test.each([
        [
            3,
            [
                [0, 1],
                [0, 2],
                [1, 2],
            ] as [number, number][],
            0,
        ],
        [
            7,
            [
                [0, 2],
                [0, 5],
                [2, 4],
                [1, 6],
                [5, 4],
            ] as [number, number][],
            14,
        ],
        [
            11,
            [
                [5, 0],
                [1, 0],
                [10, 7],
                [9, 8],
                [7, 2],
                [1, 3],
                [0, 2],
                [8, 5],
                [4, 6],
                [4, 2],
            ] as [number, number][],
            0,
        ],
    ])('should return the number of pairs', (num, connections, expected) => {
        expect(countUnreachableNodes(num, connections)).toBe(expected)
    })
})
