const arr = [1, 2, 3, 5, 7]

const findMinRotatedArray = (arr: number[]) => {
  if (arr.length === 0) return null
  if (arr.length === 1) return arr[0]

  let left = 0
  let right = arr.length - 1

  while (left < right) {
    const mid = Math.floor(left + (right - left) / 2)
    
    if (mid > 0 && arr[mid] < arr[mid - 1]) {
      return arr[mid]
    } else if (arr[mid] > arr[right] && arr[mid] >= arr[left]) {
      left = mid + 1
    } else {
      right = mid - 1
    }
  }

  return arr[left]
}

console.log(findMinRotatedArray(arr))