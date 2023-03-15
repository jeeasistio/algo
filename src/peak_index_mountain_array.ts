const arrLength = 1000
const arrLength2 = 100
const arr = Array(arrLength)
  .fill(0)
  .map((_, i) => i + 1)
const reversedArr = Array(arrLength2)
  .fill(0)
  .map((_, i) => i + 1)
  .reverse()
  .filter((v) => v !== arrLength)
arr.push(...reversedArr)

const peakIndexMountainArray = (arr: number[]): number => {
  let left = 0
  let right = arr.length - 1

  while (left <= right) {
    const middle = Math.round((left + right) / 2)

    if (arr[middle + 1] < arr[middle] && arr[middle - 1] < arr[middle]) {
      return middle
    } else if (arr[middle - 1] > arr[middle]) {
      right = middle - 1
    } else {
      left = middle + 1
    }
  }
}

const peakIndexMountainArray2 = (arr: number[]): number => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[i + 1]) {
      return i
    }
  }
}

console.time('fast')
peakIndexMountainArray(arr)
console.timeEnd('fast')

console.time('slow')
peakIndexMountainArray2(arr)
console.timeEnd('slow')