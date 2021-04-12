import reverseKNodes from './reverse-alternate-k-nodes-in-a-singly-linked-list';

class ListNode {
  constructor(val, next) {
    this.val = val;
    this.next = next || null;
  }
}

test('test1', () => {
  const head = new ListNode(1);
  head.next = new ListNode(2);
  head.next.next = new ListNode(3);
  head.next.next.next = new ListNode(4);
  head.next.next.next.next = new ListNode(5);
  head.next.next.next.next.next = new ListNode(6);
  head.next.next.next.next.next.next = new ListNode(7);
  const result = reverseKNodes(head, 3);
  const expected = new ListNode(3);
  expected.next = new ListNode(2);
  expected.next.next = new ListNode(1);
  expected.next.next.next = new ListNode(6);
  expected.next.next.next.next = new ListNode(5);
  expected.next.next.next.next.next = new ListNode(4);
  expected.next.next.next.next.next.next = new ListNode(7);
  expect(result).toEqual(expected);
});
