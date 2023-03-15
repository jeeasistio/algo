import * as sortFunctions from './sort'

describe('all sort are good', () => {
  let arr: number[]
  let sortedArr: number[]
  let floatArr: number[]
  let sortedFloatedArr: number[]
  let left: number
  let right: number
  const heap = new sortFunctions.MinHeap()

  beforeEach(() => {
    arr = [-1, 8, 6, 7, 9, 2, 0, 3, 3, 4, 5, 1, 3]
    sortedArr = [-1, 0, 1, 2, 3, 3, 3, 4, 5, 6, 7, 8, 9]
    floatArr = [8.3, 6.1, 7.7, 9.7, 2.4, 0.7, 3.8, 3.2, 4.5, 5.8, 1.9, 3.3]
    sortedFloatedArr = [ 0.7, 1.9, 2.4, 3.2, 3.3, 3.8, 4.5, 5.8, 6.1, 7.7, 8.3, 9.7 ]
    left = 0
    right = arr.length - 1
  })

  test('swap function should swap two arr elements', () => {
    const num1 = arr[1]
    const num2 = arr[2]
    sortFunctions.swap(arr, 1, 2)

    expect(arr[1]).toEqual(num2)
    expect(arr[2]).toEqual(num1)
  })

  test('should partition array', () => {
    expect(sortFunctions.partition(arr, left, right)).toEqual(4)
  })

  test('should partition array with duplicates', () => {
    expect(sortFunctions.partition3(arr, left, right)).toEqual([3, 7])
  })

  test('merge function should merge arrays', () => {
    const arr1 = arr.slice(0, 3)
    const arr2 = arr.slice(3)

    expect(sortFunctions.merge(arr1, arr2)).toEqual([
      -1, 7, 8, 6, 9, 2, 0, 3, 3, 4, 5, 1, 3
    ])
  })

  test('quick sort 3', () => {
    expect(sortFunctions.quickSort3(arr, left, right)).toEqual(sortedArr)
  })
  test('quick sort', () => {
    expect(sortFunctions.quickSort(arr, left, right)).toEqual(sortedArr)
  })
  test('heap sort', () => {
    arr.forEach((num) => heap.offer(num))

    expect(sortFunctions.heapSort(heap)).toEqual(sortedArr)
  })
  test('merge sort', () => {
    expect(sortFunctions.mergeSort(arr)).toEqual(sortedArr)
  })
  test('shell sort', () => {
    expect(sortFunctions.shellSort(arr)).toEqual(sortedArr)
  })
  test('bubble sort', () => {
    expect(sortFunctions.bubbleSort(arr)).toEqual(sortedArr)
  })
  test('selection sort', () => {
    expect(sortFunctions.selectionSort(arr)).toEqual(sortedArr)
  })
  test('insertion sort', () => {
    expect(sortFunctions.insertionSort(arr)).toEqual(sortedArr)
  })
  test('bucket sort', () => {
    expect(sortFunctions.bucketSort(floatArr, floatArr.length)).toEqual(sortedFloatedArr)
  })
})
