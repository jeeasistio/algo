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
eight.next = two

const linkedListCycle = (head: ListNode) => {
  let slow = head
  let fast = head

  if (!head) return false

  while (fast || fast?.next) {
    slow = slow.next
    fast = fast.next.next
    if (fast === slow) return true
  }

  return false
}

console.log(linkedListCycle(head))

const getIntersection = (head) => {
  let slow = head
  let fast = head

  while (fast || fast?.next) {
    slow = slow.next
    fast = fast.next.next
    if (slow === fast) return slow
  }

  return -1
}

const linkedListCycleII = (head) => {
  const intersection = getIntersection(head)
  let slow = head
  let fast = intersection

  while (fast !== slow) {
    slow = slow.next
    fast = fast.next
    if (slow === fast) return slow
  }

  return null
}

console.log(linkedListCycleII(head));