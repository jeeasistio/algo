class MinHeap {
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
