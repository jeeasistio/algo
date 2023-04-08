import { numLargest } from './largest_number'

describe('return the largest number you can form with the array', () => {
    test.each([
        [[10, 2], '210'],
        [[3, 30, 34, 5, 9], '9534330'],
        [[1113, 111311], '1113111311'],
        [[34323, 3432], '343234323'],
    ])('should return the largest number', (arr, expected) => {
        expect(numLargest(arr)).toBe(expected)
    })
})
