import addIntegers from './add-two-integers-represented-by-linked-lists';

class ListNode {
  constructor(val, next) {
    this.val = val;
    this.next = next || null;
  }
}

test('test1', () => {
  const head1 = new ListNode(1);
  head1.next = new ListNode(0);
  head1.next.next = new ListNode(9);
  head1.next.next.next = new ListNode(9);
  const head2 = new ListNode(7);
  head2.next = new ListNode(3);
  head2.next.next = new ListNode(2);
  const result = addIntegers(head1, head2);
  const expected = new ListNode(8);
  expected.next = new ListNode(3);
  expected.next.next = new ListNode(1);
  expected.next.next.next = new ListNode(0);
  expected.next.next.next.next = new ListNode(1);
  expect(result).toEqual(expected);
});
