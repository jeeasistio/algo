class MinHeap {
  data: [number, [number, number]][]

  constructor() {
    this.data = []
  }

  getCurrentValue(i: number) {
    return this.data[i]
  }
  getCurrentSum(i: number) {
    return this.data[i]?.[0]
  }
  getCurrentSumPairs(i: number) {
    return this.data[i]?.[1]
  }
  getParentIndex(i: number) {
    return Math.floor((i - 1) / 2)
  }
  getParentValue(i: number) {
    return this.data[Math.floor((i - 1) / 2)]
  }
  getParentSum(i: number) {
    return this.data[Math.floor((i - 1) / 2)]?.[0]
  }
  getParentSumPairs(i: number) {
    return this.data[Math.floor((i - 1) / 2)]?.[1]
  }
  getLeftChildIndex(i: number) {
    return i * 2 + 1
  }
  getLeftChildValue(i: number) {
    return this.data[i * 2 + 1]
  }
  getLeftChildSum(i: number) {
    return this.data[i * 2 + 1]?.[0]
  }
  getLeftChildSumPairs(i: number) {
    return this.data[i * 2 + 1]?.[1]
  }
  getRightChildIndex(i: number) {
    return i * 2 + 2
  }
  getRightChildValue(i: number) {
    return this.data[i * 2 + 2]
  }
  getRightChildSum(i: number) {
    return this.data[i * 2 + 2]?.[0]
  }
  getRightChildSumPairs(i: number) {
    return this.data[i * 2 + 2]?.[1]
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

  offer(val: [number, [number, number]]) {
    this.data.push(val)
    this.heapifyUp(this.data.length - 1)
  }

  poll() {
    if (this.data.length === 0) return null
    const firstValue = this.data[0]
    const lastValue = this.data.pop()

    this.data[0] = lastValue
    this.heapifyDown(0)

    return firstValue[1]
  }

  heapifyUp(i: number) {
    while (this.getParentSum(i) > this.getCurrentSum(i)) {
      this.swap(i, this.getParentIndex(i))
      i = this.getParentIndex(i)
    }
  }

  heapifyDown(i: number) {
    while (this.getLeftChildValue(i) !== undefined) {
      let greatestChildIndex = this.getLeftChildIndex(i)

      if (
        this.getRightChildValue(i) !== undefined &&
        this.getRightChildSum(i) < this.getLeftChildSum(i)
      ) {
        greatestChildIndex = this.getRightChildIndex(i)
      }

      if (this.getCurrentSum(greatestChildIndex) < this.getCurrentSum(i)) {
        this.swap(i, greatestChildIndex)
      }

      i = greatestChildIndex
    }
  }
}

export const nums1 = [1, 7, 11]
export const nums2 = [2, 4, 6]
export const k = 3

const kSmallestPairs = (
  nums1: number[],
  nums2: number[],
  k: number
): number[][] => {

  const res = []

  const heap = new MinHeap()
  for (let i = 0; i < nums1.length; i++) {
    for (let j = 0; j < nums2.length; j++) {
        heap.offer([nums1[i] + nums2[j], [nums1[i], nums2[j]]])
    }
  }

  for (let i = 0; i < k; i++) {
    res.push(heap.poll())
  }

  return res
}

console.log(kSmallestPairs(nums1, nums2, k))

export default kSmallestPairs
