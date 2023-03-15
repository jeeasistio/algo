class ListNode {
  constructor(public val?: number, public next?: ListNode | null) {}
}

const five = new ListNode(5)
const four = new ListNode(4, five)
const three = new ListNode(3, four)
const two = new ListNode(2, three)
const head = new ListNode(1, two)

const rotateList = (head: ListNode, k: number): ListNode => {
  let length = 0
  let finalNode = null
  let curr = head
  
  while (curr) {
    length++

    finalNode = curr
    curr = curr.next
  }

  let newHead = null
  curr = head
  let indexToCut = k % length

  for (let i = 1; i <= indexToCut; i++) {
    curr = curr.next
  }

  newHead = curr.next
  curr.next = null

  finalNode.next = head

  return newHead
}

console.log(rotateList(head, 2))