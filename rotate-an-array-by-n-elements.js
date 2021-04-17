const rotate = (arr, n) => {
  const moves = (arr.length + n) % arr.length;
  if (moves % arr.length === 0) return arr;

  reverse(0, arr.length - 1);
  reverse(0, moves - 1);
  reverse(moves, arr.length - 1);

  return arr;

  function reverse(start, end) {
    while (start < end) {
      const tmp = arr[end];
      arr[end] = arr[start];
      arr[start] = tmp;
      start++;
      end--;
    }
  }
};

export default rotate;
