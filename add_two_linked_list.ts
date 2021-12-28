class ListNode {
  constructor(public val?: number, public next?: ListNode | null) {}
}

const one = new ListNode(1)
const two = new ListNode(2, one)
const three = new ListNode(3, two)
const one2 = new ListNode(1)
const two2 = new ListNode(2, one2)
const three2 = new ListNode(3, two)

const addTwoNumbers = (
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null => {
  const dummyHead = new ListNode()
  let up = l1
  let down = l2
  let curr = dummyHead
  let carry = 0

  while (up !== null && down !== null) {
    const sum = carry + up.val + down.val
    carry = Math.floor(sum / 10)
    curr.next = new ListNode(sum % 10)
    curr = curr.next
    up = up.next
    down = down.next
  }

  if (carry > 0) {
    curr.next = new ListNode(carry)
  }

  return dummyHead.next
}

console.log(addTwoNumbers(three, three2))
