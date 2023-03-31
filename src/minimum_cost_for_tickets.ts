export const minimumCost = (
    days: number[],
    costs: [number, number, number]
): number => {
    const lastDay = days[days.length - 1]
    const travelMapping = createTravelDaysMapping(days)
    const dp = [0]
    for (let i = 1; i <= lastDay; i++) {
        if (!travelMapping[i]) {
            dp[i] = dp[i - 1]
        } else {
            dp[i] = Math.min(
                dp[i - 1] + costs[0],
                dp[Math.max(i - 7, 0)] + costs[1],
                dp[Math.max(i - 30, 0)] + costs[2]
            )
        }
    }
    return dp[lastDay]
}

const createTravelDaysMapping = (days: number[]) =>
    days.reduce((acc, val) => {
        acc[val] = true
        return acc
    }, {} as Record<string, boolean>)

console.log(minimumCost([1, 4, 6, 7, 8, 20], [2, 7, 15]))
