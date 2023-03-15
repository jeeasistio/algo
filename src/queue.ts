class MyQueue {
  arr: string[] = new Array(10)
  first: number = 0
  last: number = 0

  get isEmpty() {
    return this.first === this.last
  }

  add(name: string) {
    if (queue.first - 1 === queue.last) return 'Queue is full'

    this.arr[this.last] = name
    this.last = (this.last + 1) % this.arr.length
  }

  out() {
    this.arr[this.first] = undefined
    this.first = (this.first + 1) % this.arr.length
  }
}

const queue = new MyQueue()
queue.add('jee')
queue.add('yen')
console.log(queue)
queue.out()
console.log(queue)
