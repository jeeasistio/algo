class MyStack {
  arr: number[] = new Array(10)
  top: number = -1

  get isEmpty() {
    return this.top === -1
  }

  add(val: number) {
    if (this.top === this.arr.length - 1) return 'Stack is full'

    this.top += 1
    this.arr[this.top] = val
  }

  pop() {
    this.arr[this.top] = undefined
    this.top -= 1
  }
}

const stack = new MyStack()
stack.add(1)
stack.add(2)
stack.add(3)
stack.add(4)
stack.add(5)
stack.add(6)
stack.add(7)
stack.add(8)
stack.add(9)
stack.add(10)
console.log(stack);
stack.pop()
stack.pop()
console.log(stack)
