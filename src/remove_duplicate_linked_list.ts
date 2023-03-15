class ListNode {
  constructor(public val?: number, public next?: ListNode | null) {}
}

const eight = new ListNode(8)
const seven = new ListNode(8, eight)
const six = new ListNode(6, seven)
const five = new ListNode(6, six)
const four = new ListNode(4, five)
const three = new ListNode(4, four)
const two = new ListNode(1, three)
const head = new ListNode(1, two)

const removeDuplicate = (head: ListNode) => {
  let curr = head

  while (curr?.next) {
    const next = curr.next

    if (curr.val === next.val) curr.next = next.next

    curr = curr.next
  }

  return head
}

console.log(removeDuplicate(head))
