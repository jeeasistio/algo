export const arr = [4, 10, 3, 8, 9]

const lengthOfLIS = (arr:number[]) => {
  const dp = Array(arr.length).fill(1)

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < i; j++) {
      if (arr[i] > arr[j]) {
        dp[i] = Math.max(dp[i], dp[j] + 1)
      }
    }
  }

  return Math.max(...dp)
}

console.log(lengthOfLIS(arr));

export default lengthOfLIS