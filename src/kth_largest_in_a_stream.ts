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
    [this.data[i1], this.data[i2]] = [this.data[i2], this.data[i1]]
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


class KthLargest {
  heap: MinHeap

  constructor(public k: number, nums: number[]) {
    this.k = k
    this.heap = new MinHeap()
    nums.forEach(num => this.add(num));
  }

  add(val: number) {
    if (this.heap.data.length < this.k) {
      this.heap.offer(val)
    } else if (this.heap.peek() < val) {
      this.heap.offer(val)
      this.heap.poll()
    }

    return this.heap.peek()
  }
}

const kthLargest = new KthLargest(3, [4, 5, 8, 2]);
console.log(kthLargest.add(3))  // return 4
console.log(kthLargest.add(5))  // return 5
console.log(kthLargest.add(10))  // return 5
console.log(kthLargest.add(9))  // return 8
console.log(kthLargest.add(4))  // return 8