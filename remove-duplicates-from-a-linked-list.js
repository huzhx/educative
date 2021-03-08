const removeDuplicates = (head) => {
  const set = new Set();
  set.add(head.val);
  let cur = head;

  while (cur.next) {
    if (set.has(cur.next.val)) {
      cur.next = cur.next.next;
    } else {
      set.add(cur.next.val);
      cur = cur.next;
    }
  }
  return head;
};

export default removeDuplicates;
