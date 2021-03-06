const addIntegers = (head1, head2) => {
  let carrier = 0;
  let cur1 = head1;
  let cur2 = head2;
  let preHead = new ListNode(-1);
  let cur = preHead;

  while (cur1 && cur2) {
    let curSum = cur1.val + cur2.val + carrier;
    carrier = Math.floor(curSum / 10);
    cur.next = new ListNode(curSum % 10);
    cur1 = cur1.next;
    cur2 = cur2.next;
    cur = cur.next;
  }

  while (cur1) {
    let curSum = cur1.val + carrier;
    carrier = Math.floor(curSum / 10);
    cur.next = new ListNode(curSum % 10);
    cur1 = cur1.next;
    cur = cur.next;
  }

  while (cur2) {
    let curSum = cur2.val + carrier;
    carrier = Math.floor(curSum / 10);
    cur.next = new ListNode(curSum % 10);
    cur2 = cur2.next;
    cur = cur.next;
  }

  if (carrier) {
    cur.next = new ListNode(1);
  }

  return preHead.next;
};

class ListNode {
  constructor(val, next) {
    this.val = val;
    this.next = next || null;
  }
}

export default addIntegers;
