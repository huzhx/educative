import removeDuplicates from './remove-duplicates-from-a-linked-list';

class LinkedListNode {
  constructor(val, next) {
    this.val = val;
    this.next = next || null;
  }
}

test('test1', () => {
  const list = new LinkedListNode(4);
  list.next = new LinkedListNode(7);
  list.next.next = new LinkedListNode(4);
  list.next.next.next = new LinkedListNode(9);
  list.next.next.next.next = new LinkedListNode(7);
  list.next.next.next.next.next = new LinkedListNode(11);
  list.next.next.next.next.next.next = new LinkedListNode(4);
  const expected = new LinkedListNode(4);
  expected.next = new LinkedListNode(7);
  expected.next.next = new LinkedListNode(9);
  expected.next.next.next = new LinkedListNode(11);
  const result = removeDuplicates(list);
  expect(result).toEqual(expected);
});

test('test2', () => {
  const list = new LinkedListNode(4);
  list.next = new LinkedListNode(4);
  list.next.next = new LinkedListNode(4);
  list.next.next.next = new LinkedListNode(4);
  list.next.next.next.next = new LinkedListNode(4);
  list.next.next.next.next.next = new LinkedListNode(4);
  list.next.next.next.next.next.next = new LinkedListNode(4);
  const expected = new LinkedListNode(4);
  const result = removeDuplicates(list);
  expect(result).toEqual(expected);
});
