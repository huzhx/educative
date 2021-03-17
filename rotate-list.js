const rotateRight = (head, k) => {
  let len = 0;
  let cur = head;
  let tail;
  while (cur) {
    len++;
    tail = cur;
    cur = cur.next;
  }
  tail.next = head;

  k %= len;
  let moves = len - k - 1;
  cur = head;
  let tar = head.next;
  while (moves > 0) {
    cur = cur.next;
    tar = tar.next;
    moves--;
  }

  cur.next = null;
  return tar;
};

export default rotateRight;
