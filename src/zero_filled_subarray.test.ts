import { zero_filled_subarray } from "./zero_filled_subarray"

describe('return the number of subarray filled with zero', () => {
    test.each([
        [[1,3,0,0,2,0,0,4], 6],
        [[0,0,0,2,0,0], 9],
        [[2,10,2019], 0]
    ])('should return the number of subarray fille with zero', (arr, expected) => {
        expect(zero_filled_subarray(arr)).toBe(expected)
    })
})