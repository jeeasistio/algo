class ListNode {
  constructor(public val?: number, public next?: ListNode | null) {}
}

const eight = new ListNode(8)
const seven = new ListNode(7, eight)
const six = new ListNode(6, seven)
const five = new ListNode(5, six)
const four = new ListNode(4, five)
const three = new ListNode(3, four)
const two1 = new ListNode(2, three)
const two = new ListNode(2, two1)
export const head = new ListNode(1, two)
export const res = new ListNode(1, three)

const removeDuplicateLinkedListII = (head: ListNode) => {
  let curr = head
  let dummy = new ListNode(null, curr)
  let prev = dummy

  while (curr?.next) {
    if (curr.val === curr.next?.val) {
      while (curr.val === curr.next?.val) {
        curr = curr.next
      }

      prev.next = curr.next
      curr = curr.next
    } else {
      prev = curr
      curr = curr.next
    }
  }

  return dummy.next
}

console.log(removeDuplicateLinkedListII(head));

export default removeDuplicateLinkedListII
