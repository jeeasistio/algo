import lengthOfLIS, { arr } from './longest_increasing_subsequence'

describe('longest increasing subsequence', () => {
  test('should return longest inc subseq', () => {
    expect(lengthOfLIS(arr)).toEqual(3)
  })
})
