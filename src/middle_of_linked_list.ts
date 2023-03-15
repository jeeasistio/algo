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

const middleNode = (head: ListNode | null): ListNode | null => {
  let length = 0
  let currNode = head
  let middle = 0
  let secondLoop = false
  while (currNode) {
    length++

    if (secondLoop && length === middle) return currNode

    currNode = currNode.next

    if (!currNode) {
      const half = length / 2
      middle = length % 2 ? Math.round(half) : half + 1
      length = 0
      secondLoop = true
      currNode = head
    }
  }
}

const middleNode2 = (head: ListNode | null) => {
  let first = head
  let second = head

  while (first && second) {
    first = first.next
    second = second.next.next
  }

  return first
}

console.log(middleNode(head))
console.log(middleNode2(head))
