const reverseEvenNodes = (head) => {
  let cur = head;
  let listEven = null;
  while (cur && cur.next) {
    let even = cur.next;
    cur.next = even.next;
    even.next = listEven;
    listEven = even;
    cur = cur.next;
  }

  return merge(head, listEven);

  function merge(list1, list2) {
    if (!list1) return list2;
    if (!list2) return list1;
    let head = list1;
    while (list1.next && list2) {
      let tmp = list2;
      list2 = list2.next;
      tmp.next = list1.next;
      list1.next = tmp;
      list1 = tmp.next;
    }
    if (!list1.next) {
      list1.next = list2;
    }
    return head;
  }
};

export default reverseEvenNodes;
