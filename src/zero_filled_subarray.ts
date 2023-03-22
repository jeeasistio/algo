export const zero_filled_subarray = (arr: number[]) => {
    let count = 0,
        currLongest = 0
    arr.forEach((v, i) => {
        if (v === 0) {
            currLongest += 1
        } else {
            count += (currLongest * (currLongest + 1)) / 2
            currLongest = 0
        }
    })
    count += (currLongest * (currLongest + 1)) / 2
    currLongest = 0
    return count || currLongest
}

console.log(zero_filled_subarray([1, 3, 0, 0, 2, 0, 0, 4]))
