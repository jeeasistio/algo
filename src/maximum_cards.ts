export const maxScore = (cards: number[], limit: number): number => {
    let cardsA: number[] = []
    let cardsB: number[] = []
    let maxScore = 0
    for (let i = limit; i >= 0; i--) {
        cardsA = cards.slice(0, i)
        cardsB = cards.slice(cards.length - (limit - i), cards.length)
        maxScore = Math.max(getSum(cardsA.concat(cardsB)))
    }

    return maxScore
}

const getSum = (nums: number[]) => nums.reduce((acc, val) => (acc += val), 0)

console.log(maxScore([1, 2, 3, 4, 5, 6, 1], 3))
