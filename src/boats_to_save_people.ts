export const numRescueBoats = (people: number[], limit: number): number => {
    let currNumOfBoats = 0
    const extras: number[] = []
    people.forEach((weight) => {
        if (shipOnExtras(extras, weight)) return
        if (weight < limit) {
            extras.push(limit - weight)
        }
        currNumOfBoats += 1
    })

    return currNumOfBoats
}

const shipOnExtras = (extras: number[], weight: number) => {
    if (extras.length < 1) return false
    let minWeightIndex = -1

    extras.forEach((extraWeight, i) => {
        if (extraWeight >= weight) {
            if ((minWeightIndex = -1)) minWeightIndex = i
            minWeightIndex = Math.min(minWeightIndex, i)
        }
    })

    if (minWeightIndex > -1) {
        extras.splice(minWeightIndex, 1)
        return true
    }

    return false
}

console.log(numRescueBoats([3, 5, 3, 4], 5))
