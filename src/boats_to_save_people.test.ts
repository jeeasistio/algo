import { numRescueBoats } from './boats_to_save_people'

describe('return the minimum number of boats to carry every given person', () => {
    test.each([
        [[1, 2], 3, 1],
        [[3, 2, 2, 1], 3, 3],
        [[3, 5, 3, 4], 5, 4],
    ])(
        'should return the minimum number of boats',
        (people, limit, expected) => {
            expect(numRescueBoats(people, limit)).toBe(expected)
        }
    )
})
