import reverseEveryKElements from './reverse-every-k-element-sub-list';

class ListNode {
  constructor(val, next) {
    this.val = val;
    this.next = next || null;
  }
}

test('test1', () => {
  const prehead = new ListNode(0);
  let cur = prehead;
  let nums = [1, 2, 3, 4, 5, 6, 7, 8];
  for (let num of nums) {
    cur.next = new ListNode(num);
    cur = cur.next;
  }
  const k = 3;
  const expectedPrehead = new ListNode(0);
  cur = expectedPrehead;
  nums = [3, 2, 1, 6, 5, 4, 8, 7];
  for (let num of nums) {
    cur.next = new ListNode(num);
    cur = cur.next;
  }
  const result = reverseEveryKElements(prehead.next, k);
  expect(result).toEqual(expectedPrehead.next);
});

test('test2', () => {
  const prehead = new ListNode(0);
  let cur = prehead;
  let nums = [1, 2, 3, 4, 5, 6, 7, 8];
  for (let num of nums) {
    cur.next = new ListNode(num);
    cur = cur.next;
  }
  const k = 7;
  const expectedPrehead = new ListNode(0);
  cur = expectedPrehead;
  nums = [7, 6, 5, 4, 3, 2, 1, 8];
  for (let num of nums) {
    cur.next = new ListNode(num);
    cur = cur.next;
  }
  const result = reverseEveryKElements(prehead.next, k);
  expect(result).toEqual(expectedPrehead.next);
});

test('test3', () => {
  const prehead = new ListNode(0);
  let cur = prehead;
  let nums = [1, 2, 3, 4, 5, 6, 7, 8];
  for (let num of nums) {
    cur.next = new ListNode(num);
    cur = cur.next;
  }
  const k = 8;
  const expectedPrehead = new ListNode(0);
  cur = expectedPrehead;
  nums = [8, 7, 6, 5, 4, 3, 2, 1];
  for (let num of nums) {
    cur.next = new ListNode(num);
    cur = cur.next;
  }
  const result = reverseEveryKElements(prehead.next, k);
  expect(result).toEqual(expectedPrehead.next);
});

test('test4', () => {
  const prehead = new ListNode(0);
  let cur = prehead;
  let nums = [1, 2, 3, 4, 5, 6, 7, 8];
  for (let num of nums) {
    cur.next = new ListNode(num);
    cur = cur.next;
  }
  const k = 10;
  const expectedPrehead = new ListNode(0);
  cur = expectedPrehead;
  nums = [8, 7, 6, 5, 4, 3, 2, 1];
  for (let num of nums) {
    cur.next = new ListNode(num);
    cur = cur.next;
  }
  const result = reverseEveryKElements(prehead.next, k);
  expect(result).toEqual(expectedPrehead.next);
});

test('test5', () => {
  const prehead = new ListNode(0);
  let cur = prehead;
  let nums = [1, 2, 3, 4, 5, 6, 7, 8];
  for (let num of nums) {
    cur.next = new ListNode(num);
    cur = cur.next;
  }
  const k = 1;
  const expectedPrehead = new ListNode(0);
  cur = expectedPrehead;
  nums = [1, 2, 3, 4, 5, 6, 7, 8];
  for (let num of nums) {
    cur.next = new ListNode(num);
    cur = cur.next;
  }
  const result = reverseEveryKElements(prehead.next, k);
  expect(result).toEqual(expectedPrehead.next);
});
