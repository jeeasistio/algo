const _coinChange = (coins: number[], amount: number) => {
  if (amount === 0) return []
  if (amount < 0) return null

  let shortestCombination = null

  for (let i = 0; i < coins.length; i++) {
    if (coins[i] <= amount) {
      const remainder = amount - coins[i]
      const remainderResult = _coinChange(coins, remainder)
      if (remainderResult !== null) {
        const combination = [...remainderResult, coins[i]]
        if (
          shortestCombination === null ||
          combination.length < shortestCombination.length
        ) {
          shortestCombination = combination
        }
      }
    }
  }

  return shortestCombination
}

const coinChange = (coins: number[], amount: number) => {
  return _coinChange(coins, amount)?.length ?? -1
}

// console.time('rec')
// console.log(coinChange([1, 2, 5], 11))
// console.timeEnd('rec')

const _coinChangeMemo = (coins: number[], amount: number, memo = {}) => {
  if (memo[amount] !== undefined) return memo[amount]
  if (amount === 0) return []
  if (amount < 0) return null

  let shortestCombination = null

  for (let i = 0; i < coins.length; i++) {
    if (coins[i] <= amount) {
      const remainder = amount - coins[i]
      const remainderResult = _coinChangeMemo(coins, remainder, memo)
      if (remainderResult !== null) {
        const combination = [...remainderResult, coins[i]]
        if (
          shortestCombination === null ||
          combination.length < shortestCombination.length
        ) {
          shortestCombination = combination
        }
      }
    }
  }

  memo[amount] = shortestCombination
  return shortestCombination
}

const coinChangeMemo = (coins: number[], amount: number, memo = {}) => {
  return _coinChangeMemo(coins, amount)?.length ?? -1
}

// console.time('memo')
// console.log(coinChangeMemo([1, 2, 5], 11))
// console.timeEnd('memo')


const coinChangeTabulation = (coins: number[], amount: number): number => {
  const table = Array(amount + 1).fill(amount + 1)
  table[0] = 0

  for (let i = 0; i <= amount; i++) {
    for (let j = 0; j < coins.length; j++) {
      if ((i + coins[j]) <= amount) {
        table[i + coins[j]] = Math.min(table[i + coins[j]], table[i] + 1)
      }
    }
  }

  return table[amount] > amount ? -1 : table[amount]
}

// console.time('tabulation');
// console.log(coinChangeTabulation([1, 2, 5], 11))
// console.timeEnd('tabulation');