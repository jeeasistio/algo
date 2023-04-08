export const numLargest = (arr: number[]): string => {
    const res = arr
        .map(String)
        .sort((a, b) => {
            return a.concat(b) > b.concat(a) ? -1 : 1
        })
        .join('')

    return res.charAt(0) === '0' ? '0' : res
}

console.log(numLargest([1113, 111311]))
