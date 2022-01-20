class ListNode {
  constructor(public val?: number, public next?: ListNode | null) {}
}

const three = new ListNode(3)
const four = new ListNode(4, three)
const root = new ListNode(2, four)
const four1 = new ListNode(4)
const six = new ListNode(6, four1)
const root2 = new ListNode(5, six)

const addTwoNumbers = (
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null => {
  const dummyHead = new ListNode()
  let up = l1
  let down = l2
  let curr = dummyHead
  let carry = 0

  while (up || down) {
    const addendUp = up ? up.val : 0
    const addendDown = down ? down.val : 0
    const sum = carry + addendUp + addendDown
    carry = Math.floor(sum / 10)
    curr.next = new ListNode(sum % 10)
    curr = curr.next
    up = up?.next
    down = down?.next
  }

  if (carry > 0) {
    curr.next = new ListNode(carry)
  }

  return dummyHead.next
}

console.log(addTwoNumbers(root, root2))
