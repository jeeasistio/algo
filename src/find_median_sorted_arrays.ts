const findMedianSortedArrays = (arr1: number[], arr2: number[]): number => {
  let median: number
  const mergedArr = Array.from(new Set([...arr1, ...arr2])).sort()
  mergedArr.forEach(num => {
    if (num < 0) {
      median = -1
    }
  })
  if (median < 0) return median
  if (mergedArr.length % 2 === 0) {
    const firstMedInd = mergedArr.length / 2 - 1
    const secondMedInd = firstMedInd + 1
    median = (mergedArr[firstMedInd] + mergedArr[secondMedInd]) / 2
  } else {
    const medInd = Math.round(mergedArr.length / 2 - 1)
    median = mergedArr[medInd]
  }
  return median
}

const arr1 = [1, 3]
const arr2 = [2, -1]

console.log(findMedianSortedArrays(arr1, arr2))
