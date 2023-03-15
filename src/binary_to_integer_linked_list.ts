class ListNode {
  constructor(public val?: number, public next?: ListNode | null) {}
}

const one = new ListNode(0)
const two = new ListNode(1, one)
const three = new ListNode(1, two)
const four = new ListNode(0, three)
const five = new ListNode(0, four)
const six = new ListNode(0, five)
const seven = new ListNode(0, six)
const head = new ListNode(0, seven)

const getDecimalValue = (head: ListNode | null): number => {
  let binaryNum = ''
  let currNode = head

  while (currNode) {
    binaryNum += currNode.val.toString()
    currNode = currNode.next
  }

  return parseInt(binaryNum, 2)
}

console.log(getDecimalValue(head))
