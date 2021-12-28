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

const insertAtIndex = (head: ListNode | null, targetIndex: number) => {
  let currIndex  = 0
  let curr = head
  let prev = null
  const newNode = new ListNode(9)

  while (targetIndex > currIndex) {
    currIndex++
    prev = curr
    curr = curr.next
  }

  newNode.next = curr
  prev.next = newNode

  return head
}

console.log(insertAtIndex(head, 1));