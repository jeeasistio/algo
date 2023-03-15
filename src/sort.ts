export class MinHeap {
  data: number[]

  constructor() {
    this.data = []
  }

  getCurrentValue(i: number) {
    return this.data[i]
  }
  getParentIndex(i: number) {
    return Math.floor((i - 1) / 2)
  }
  getParentValue(i: number) {
    return this.data[Math.floor((i - 1) / 2)]
  }
  getLeftChildIndex(i: number) {
    return i * 2 + 1
  }
  getLeftChildValue(i: number) {
    return this.data[i * 2 + 1]
  }
  getRightChildIndex(i: number) {
    return i * 2 + 2
  }
  getRightChildValue(i: number) {
    return this.data[i * 2 + 2]
  }
  getLastIndex() {
    return this.data.length - 1
  }

  swap(i1: number, i2: number) {
    const temp = this.getCurrentValue(i1)
    this.data[i1] = this.data[i2]
    this.data[i2] = temp
  }

  peek() {
    if (this.data.length === 0) return null
    return this.data[0]
  }

  offer(val: number) {
    this.data.push(val)
    this.heapifyUp(this.getLastIndex())
  }

  poll() {
    if (this.data.length === 0) return null
    const firstValue = this.data[0]
    const lastValue = this.data.pop()

    this.data[0] = lastValue
    this.heapifyDown(0)

    return firstValue
  }

  heapifyUp(i: number) {
    while (this.getParentValue(i) > this.getCurrentValue(i)) {
      this.swap(i, this.getParentIndex(i))
      i = this.getParentIndex(i)
    }
  }

  heapifyDown(i: number) {
    while (this.getLeftChildValue(i) !== undefined) {
      let leastChildIndex = this.getLeftChildIndex(i)
      console.log(leastChildIndex)

      if (
        this.getRightChildValue(i) !== undefined &&
        this.getRightChildValue(i) < this.getLeftChildValue(i)
      ) {
        leastChildIndex = this.getRightChildIndex(i)
      }

      if (this.getCurrentValue(leastChildIndex) < this.getCurrentValue(i)) {
        this.swap(i, leastChildIndex)
      }

      i = leastChildIndex
    }
  }
}
const arr = [-1, 8, 6, 7, 9, 2, 0, 3, 3, 4, 5, 1, 3]
const floatArr = [8.3, 6.1, 7.7, 9.7, 2.4, 0.7, 3.8, 3.2, 4.5, 5.8, 1.9, 3.3]
const heap = new MinHeap()
arr.forEach((num) => heap.offer(num))

// * Utility Functions
export const swap = (arr: number[], i1: number, i2: number) => {
  ;[arr[i1], arr[i2]] = [arr[i2], arr[i1]]
}

export const merge = (arr1: number[], arr2: number[]) => {
  let arr = []

  while (arr1.length && arr2.length) {
    arr1[0] > arr2[0] ? arr.push(arr2.shift()) : arr.push(arr1.shift())
  }

  return [...arr, ...arr1, ...arr2]
}

export const partition = (arr: number[], left: number, right: number) => {
  const p = arr[right]
  let i = left - 1

  for (let j = left; j <= right - 1; j++) {
    if (arr[j] < p) {
      i += 1
      swap(arr, i, j)
    }
  }

  swap(arr, i + 1, right)

  return i + 1
}

export const partition3 = (arr: number[], left: number, right: number) => {
  let p = arr[right]
  let pIndex = right
  let i = left - 1

  for (let j = left; j < pIndex; j++) {
    if (arr[j] < p) {
      i += 1
      swap(arr, i, j)
    }
    if (arr[j] === p) {
      pIndex--
      swap(arr, j, pIndex)
      j--
    }
  }

  const beginningPivot = i

  for (pIndex; pIndex <= right; pIndex++, i++) {
    swap(arr, i + 1, pIndex)
  }

  const endingPivot = i + 1

  return [beginningPivot, endingPivot]
}

// * Sort Functions

// * 3-way Quick Sort
export const quickSort3 = (arr: number[], left: number, right: number) => {
  if (left >= right) return

  const [pivotRange1, pivotRange2] = partition3(arr, left, right)
  quickSort3(arr, left, pivotRange1)
  quickSort3(arr, pivotRange2, right)

  return arr
}

// console.time('Quick Sort 3');
// console.log(quickSort3(arr, 0, arr.length - 1))
// console.timeEnd('Quick Sort 3');

// * Quick Sort
export const quickSort = (arr: number[], left: number, right: number) => {
  if (left >= right) return

  const pivot = partition(arr, left, right)

  quickSort(arr, left, pivot - 1)
  quickSort(arr, pivot + 1, right - 1)

  return arr
}

// console.time('Quick Sort');
// console.log(quickSort(arr, 0, arr.length - 1))
// console.timeEnd('Quick Sort');

// * Heap Sort
export const heapSort = (heap: MinHeap) => {
  const arr = []
  const len = heap.data.length

  for (let i = 0; i < len; i++) {
    arr.push(heap.poll())
  }

  return arr
}

// console.time('Heap Sort');
// console.log(heapSort(heap));
// console.timeEnd('Heap Sort');

// * Merge Sort
export const mergeSort = (arr: number[]) => {
  const m = Math.floor(arr.length / 2)

  if (arr.length <= 1) return arr

  const leftSide = mergeSort(arr.splice(0, m))
  const rightSide = mergeSort(arr)
  return merge(leftSide, rightSide)
}

// console.time('Merge Sort');
// console.log(mergeSort(arr))
// console.timeEnd('Merge Sort');

// * Shell Sort
export const shellSort = (arr: number[]) => {
  for (
    let gap = Math.floor(arr.length / 2);
    gap > 0;
    gap = Math.floor(gap / 2)
  ) {
    for (let i = gap; i < arr.length; i++) {
      const num = arr[i]
      let j

      for (j = i; j >= gap && arr[j - gap] > num; j -= gap) {
        arr[j] = arr[j - gap]
      }

      arr[j] = num
    }
  }

  return arr
}

// console.time('Shell Sort');
// console.log(shellSort(arr));
// console.timeEnd('Shell Sort');

// * Bubble Sort
export const bubbleSort = (arr: number[]) => {
  for (let i = 0; i < arr.length; i++) {
    let len = arr.length

    for (let j = 0; j < len; j++) {
      const num1 = arr[j]
      const num2 = arr[j + 1]
      const len = arr.length

      if (num1 > num2) {
        swap(arr, j, j + 1)
      }
    }

    len--
  }

  return arr
}

// console.time('Bubble Sort');
// console.log(bubbleSort(arr));
// console.timeEnd('Bubble Sort');

// * Selection Sort
export const selectionSort = (arr: number[]) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      let minValue = [arr[i], i]
      const num = arr[j]

      if (num < minValue[0]) {
        minValue = [num, j]
      }

      swap(arr, minValue[1], i)
    }
  }

  return arr
}

// console.time('Selection Sort');
// console.log(selectionSort(arr));
// console.timeEnd('Selection Sort');

// * Insertion Sort
export const insertionSort = (arr: number[]) => {
  for (let i = 0; i < arr.length; i++) {
    const num = arr[i]
    let j: number

    for (j = i - 1; j >= 0 && arr[j] > num; j--) {
      arr[j + 1] = arr[j]
    }

    arr[j + 1] = num
  }

  return arr
}

// console.time('Insertion Sort');
// console.log(insertionSort(arr));
// console.timeEnd('Insertion Sort');

// * BucketSort
export const bucketSort = (arr: number[], bucketNum: number) => {
  const bucket = []
  let ans = []

  for (let i = 0; i < bucketNum; i++) {
    bucket.push([])
  }
  
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i]; 

    bucket[Math.floor(element)].push(element)
  }

  for (let i = 0; i < bucket.length; i++) {
    const element = bucket[i];
    if (element.length > 1) {
      insertionSort(element)
    }
    ans.push(...element)
  }

  return ans
}

// console.time('Bucket Sort');
// console.log(bucketSort(floatArr, floatArr.length));
// console.timeEnd('Bucket Sort');
