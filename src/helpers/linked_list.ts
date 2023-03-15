import { ListNode } from '../types/LinkedList'
import { NonEmptyArray } from '../types/utils'

export const generateLinkedListFromArr = (arr: NonEmptyArray<number>) => {
    const head = arr[0]
    const headNode = new ListNode(head)
    let currNode: ListNode | undefined | null = headNode
    arr.forEach((item, index) => {
        if (index === 0) return
        const newNode = new ListNode(item)
        if (currNode) currNode.next = newNode
        currNode = currNode?.next
    })
    return headNode
}
