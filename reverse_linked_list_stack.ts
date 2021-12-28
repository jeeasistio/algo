class ListNode {
  constructor(public val?: number, public next?: ListNode | null) {}
}

const eight = new ListNode(8)
const seven = new ListNode(7, eight)
const six = new ListNode(6, seven)
const five = new ListNode(5, six)
const four = new ListNode(4, five)
const three = new ListNode(3, four)
const two = new ListNode(2, three)
const head = new ListNode(1, two)

const reverseLinkedList = (head: ListNode) => {
  const stack = [];
  let curr = head

  while (curr) {
    stack.push(curr)
    curr = curr.next
  }

  const newHead = stack.pop()
  let newCurr = newHead

  while (stack.length) {
    newCurr.next = stack.pop()
    newCurr = newCurr.next
  }

  return newHead
}

console.log(reverseLinkedList(head));