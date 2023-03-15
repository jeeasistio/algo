class MinHeap {
  data: [number, number][]

  constructor() {
    this.data = []
  }

  getCurrentValue(i: number) {
    return this.data[i]
  }
  getCurrentElement(i: number) {
    return this.data[i]?.[0]
  }
  getCurrentElementCount(i: number) {
    return this.data[i]?.[1]
  }
  getParentIndex(i: number) {
    return Math.floor((i - 1) / 2)
  }
  getParentValue(i: number) {
    return this.data[Math.floor((i - 1) / 2)]
  }
  getParentElement(i: number) {
    return this.data[Math.floor((i - 1) / 2)]?.[0]
  }
  getParentElementCount(i: number) {
    return this.data[Math.floor((i - 1) / 2)]?.[1]
  }
  getLeftChildIndex(i: number) {
    return i * 2 + 1
  }
  getLeftChildValue(i: number) {
    return this.data[i * 2 + 1]
  }
  getLeftChildElement(i: number) {
    return this.data[i * 2 + 1]?.[0]
  }
  getLeftChildElementCount(i: number) {
    return this.data[i * 2 + 1]?.[1]
  }
  getRightChildIndex(i: number) {
    return i * 2 + 2
  }
  getRightChildValue(i: number) {
    return this.data[i * 2 + 2]
  }
  getRightChildElement(i: number) {
    return this.data[i * 2 + 2]?.[0]
  }
  getRightChildElementCount(i: number) {
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

  offer(val: [number, number]) {
    this.data.push(val)
    this.heapifyUp(this.data.length - 1)
  }

  poll() {
    if (this.data.length === 0) return null
    const firstValue = this.data[0]
    const lastValue = this.data.pop()

    this.data[0] = lastValue
    this.heapifyDown(0)

    return firstValue[0]
  }

  heapifyUp(i: number) {
    while (this.getParentElementCount(i) < this.getCurrentElementCount(i)) {
      this.swap(i, this.getParentIndex(i))
      i = this.getParentIndex(i)
    }
  }

  heapifyDown(i: number) {
    while (this.getLeftChildValue(i) !== undefined) {
      let greatestChildIndex = this.getLeftChildIndex(i)

      if (
        this.getRightChildValue(i) !== undefined &&
        this.getRightChildElementCount(i) > this.getLeftChildElementCount(i)
      ) {
        greatestChildIndex = this.getRightChildIndex(i)
      }

      if (this.getCurrentElementCount(greatestChildIndex) > this.getCurrentElementCount(i)) {
        this.swap(i, greatestChildIndex)
      }

      i = greatestChildIndex
    }
  }
}


const topKFrequentElements = (arr: number[], k: number) => {
  const heap = new MinHeap()
  const map = {}
  const res = []

  for (let i = 0; i < arr.length; i++) {
    map[arr[i]] = map[arr[i]] + 1 || 1
  }

  for (let i in map) {
    heap.offer([+i, map[i]])
  }

  for (let i = 0; i < k; i++) {
    res.push(heap.poll())
  }
  
  return res
}

console.log(topKFrequentElements([1,1,1,2,2,3], 2));