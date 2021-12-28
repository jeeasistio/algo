import removeDuplicateLinkedListII, { head, res } from './remove_duplicate_linked_list_II'

describe('remove duplicate linked list II', () => {
  test('should remove duplicate on a linked list 2', () => {
    expect(removeDuplicateLinkedListII(head)).toEqual(res)
  })
})
