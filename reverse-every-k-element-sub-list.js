const reverseEveryKElements = (head, k) => {
  if (!head || k <= 1) return head;
  const [reversedHead, next] = reverseKElements(head, k);
  head.next = reverseEveryKElements(next, k);
  return reversedHead;

  function reverseKElements(head, k) {
    let prev = null;
    let cur = head;
    let next = null;
    while (k > 0 && cur) {
      next = cur.next;
      cur.next = prev;
      prev = cur;
      cur = next;
      k--;
    }
    return [prev, cur];
  }
};

export default reverseEveryKElements;
