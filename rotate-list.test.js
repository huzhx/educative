import rotateRight from './rotate-list';

class ListNode {
  constructor(val, next) {
    this.val = val;
    this.next = next || null;
  }
}

test('test1', () => {
  const head = new ListNode(0);
  head.next = new ListNode(1);
  head.next.next = new ListNode(2);
  const expected = new ListNode(1);
  expected.next = new ListNode(2);
  expected.next.next = new ListNode(0);
  const result = rotateRight(head, 2);
  expect(result).toEqual(expected);
});

test('test2', () => {
  const head = new ListNode(1);
  head.next = new ListNode(2);
  head.next.next = new ListNode(3);
  head.next.next.next = new ListNode(4);
  head.next.next.next.next = new ListNode(5);
  const expected = new ListNode(4);
  expected.next = new ListNode(5);
  expected.next.next = new ListNode(1);
  expected.next.next.next = new ListNode(2);
  expected.next.next.next.next = new ListNode(3);
  const result = rotateRight(head, 2);
  expect(result).toEqual(expected);
});
