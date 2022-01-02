import intersectionOfTwoArr, {
  nums1,
  nums2
} from './intersection_of_two_arrays'

describe('find k smallest pairs', () => {
  test('should return k smallest pairs', () => {
    expect(intersectionOfTwoArr(nums1, nums2)).toEqual(
      expect.arrayContaining([6, 4])
    )
  })
})
