const minSubArrayLen = (target: number, nums: number[]): number => {
  let currLength = 0
  let currSum = 0
  let minLength = 0

  for (let i = 0; i <= nums.length; i++) {
    currSum += nums[i]
    currLength++

    while (currSum >= target) {
      if (minLength === 0) minLength = currLength
      if (currLength < minLength) minLength = currLength
      
      currSum -= nums[i - currLength + 1]
      currLength--
    }
  }

  return minLength
}

export default minSubArrayLen
