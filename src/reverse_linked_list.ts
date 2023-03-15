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

const reverseList = (head: ListNode | null) => {
  let prevNode = null 
  let currNode = head

  while (currNode) {
    let tempNext = currNode.next
    currNode.next = prevNode
    prevNode = currNode
    currNode = tempNext
  }

  return prevNode
}

console.log(reverseList(head))
