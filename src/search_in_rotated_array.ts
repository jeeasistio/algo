const arr = [8, 1, 2, 3, 4, 5, 6, 7]

const searchInRotatedArray = (arr: number[], target: number) => {
  let left = 0
  let right = arr.length - 1

  while (left <= right) {
    const mid = Math.round(left + (right - left) / 2)
    const leftVal = arr[left]
    const rightVal = arr[right]
    const midVal = arr[mid]

    if (midVal === target) return mid
    if (leftVal === target) return left
    if (rightVal === target) return right

    if (midVal > leftVal) {
      if (leftVal <= target && midVal >= target) {
        right = mid - 1
      } else {
        left = mid + 1
      }
    } else {
      if (midVal <= target && rightVal >= target) {
        left = mid + 1
      } else {
        right = mid - 1
      }
    }
  }

  return -1
}

console.log(searchInRotatedArray(arr, 6))
