const findLPSLength = (string) => {
  const memo = {};
  return helper(string, 0, string.length - 1);

  function helper(string, start, end) {
    if (start > end) return 0;
    if (start === end) return 1;

    memo[start] = memo[start] || [];
    if (typeof memo[start][end] !== 'undefined') {
      return memo[start][end];
    }

    if (string[start] === string[end]) {
      const remainingLength = end - start - 1;
      if (remainingLength === helper(string, start + 1, end - 1)) {
        memo[start][end] = remainingLength + 2;
        return memo[start][end];
      }
    }

    const c1 = helper(string, start + 1, end);
    const c2 = helper(string, start, end - 1);
    memo[start][end] = Math.max(c1, c2);

    return memo[start][end];
  }
};

export default findLPSLength;
