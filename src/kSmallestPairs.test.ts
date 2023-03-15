import kSmallestPairs, { nums1, nums2, k } from './k_smallest_pairs'

describe('find k smallest pairs', () => {
  test('should return k smallest pairs', () => {
    expect(kSmallestPairs(nums1, nums2, k)).toEqual([
      [1, 2],
      [1, 4],
      [1, 6]
    ])
  })
})
