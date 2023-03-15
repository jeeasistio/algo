const sortedArr = Array(100000)
  .fill(0)
  .map((_, i) => i + 1)

const binarySearch = (arr: number[], targetNum: number) => {
  let left = 0
  let right = sortedArr.length - 1
  
  while (left <= right) {
    const middle = Math.round((left + right) / 2)
    if (sortedArr[middle] === targetNum) return middle

    if (targetNum < sortedArr[middle]) {
      right = middle - 1
    } else {
      left = middle + 1
    }
  }

  return -1
}

console.time('binary')
binarySearch(sortedArr, 99999)
console.timeEnd('binary')

console.time('find')
sortedArr.find((val) => val === 99999)
console.timeEnd('find')

console.log(binarySearch(sortedArr, 9999))
