const reverseKNodes = (head, k) => {
  let cur = head;
  let count = k;
  while (cur && count > 0) {
    cur = cur.next;
    count--;
  }

  if (count === 0) {
    const reversedHead = reverseNextKNodes(head, k);
    head.next = reverseKNodes(cur, k);
    return reversedHead;
  } else {
    return head;
  }

  function reverseNextKNodes(head, k) {
    let prev = null;
    let cur = head;
    while (k > 0) {
      const next = cur.next;
      cur.next = prev;
      prev = cur;
      cur = next;
      k--;
    }
    return prev;
  }
};

export default reverseKNodes;
