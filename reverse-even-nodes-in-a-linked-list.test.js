import reverseEvenNodes from './reverse-even-nodes-in-a-linked-list';

class ListNode {
  constructor(val, next) {
    this.val = val;
    this.next = next || null;
  }
}

test('test1', () => {
  const head = new ListNode(7);
  head.next = new ListNode(14);
  head.next.next = new ListNode(21);
  head.next.next.next = new ListNode(28);
  head.next.next.next.next = new ListNode(9);
  const expected = new ListNode(7);
  expected.next = new ListNode(28);
  expected.next.next = new ListNode(21);
  expected.next.next.next = new ListNode(14);
  expected.next.next.next.next = new ListNode(9);
  const result = reverseEvenNodes(head);
  expect(result).toEqual(expected);
});
