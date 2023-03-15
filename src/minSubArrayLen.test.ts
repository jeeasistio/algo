import minSubArrayLen from './min_sub_array_len'

describe('minSubArrayLen', () => {
  test('should return 0', () => {
    expect(minSubArrayLen(1, [])).toBe(0)
  });

  test('should return minimum sub array length', () => {
    expect(minSubArrayLen(7, [2,3,1,2,4,3])).toBe(2)
  });

  test('should return 0 if not sufficient', () => {
    expect(minSubArrayLen(11, [1,1,1,1,1,1,1,1])).toBe(0)
  });
})