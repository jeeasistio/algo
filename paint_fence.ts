export const n = 2
export const k = 4

const helper = (numOfPosts: number, numOfColors: number) => {
  const numOfWays = { same: 0, diff: 0 }

  if (numOfPosts === 1) return numOfWays
  if (numOfPosts === 2) {
    numOfWays.same = numOfColors * 1
    numOfWays.diff = numOfColors * (numOfColors - 1)

    return numOfWays
  }

  numOfWays.same = helper(numOfPosts - 1, numOfColors).diff
  numOfWays.diff =
    (helper(numOfPosts - 1, numOfColors).diff +
      helper(numOfPosts - 1, numOfColors).same) *
    (k - 1)

  return numOfWays
}

const paintFence = (numOfPosts: number, numOfColors: number): number => {
  if (numOfPosts === 1) return numOfColors

  const numOfWays = helper(numOfPosts, numOfColors)
  return numOfWays.same + numOfWays.diff
}

console.time('rec')
console.log(paintFence(n, k))
console.timeEnd('rec')

const paintFenceDp = (numOfPosts: number, numOfColors: number): number => {
  const dp = Array(numOfPosts).fill(0)
  dp[0] = { same: 0, diff: 0 }
  dp[1] = { same: numOfColors * 1, diff: numOfColors * (numOfColors - 1) }

  for (let i = 2; i < numOfPosts; i++) {
    dp[i] = {
      same: dp[i - 1].diff,
      diff: (dp[i - 1].same + dp[i - 1].diff) * (numOfColors - 1)
    }
  }

  return dp[numOfPosts - 1].same + dp[numOfPosts - 1].diff
}

console.time('dp')
console.log(paintFenceDp(n, k))
console.timeEnd('dp')

export default paintFence
