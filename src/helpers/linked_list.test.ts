import { ListNode } from '../types/LinkedList'
import { generateLinkedListFromArr } from './linked_list'

const two = new ListNode(2)
const one = new ListNode(1)
const zero = new ListNode(0)

describe('generate linked list from array', () => {
    test('should generate', () => {
        zero.next = one
        one.next = two
        const head = zero

        expect(generateLinkedListFromArr([0, 1, 2])).toStrictEqual(head)
    })
})
