const combinationSum = (
  nums: number[],
  target: number,
  i: number = 0,
  currCombination: number[] = [],
  combinations: number[][] = [],
  total: number = 0
) => {
  if (total > target || i === nums.length) return
  if (total === target) {
    combinations.push(currCombination)
    return
  }

  combinationSum(nums, target, i, currCombination.concat(nums[i]), combinations, total + nums[i])
  combinationSum(nums, target, i + 1, currCombination, combinations, total)

  return combinations
}

console.log(combinationSum([2, 3, 5], 8))
