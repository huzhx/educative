const getLRSLength = (input) => {
  const memo = {};
  return helper(input, 0, 0);

  function helper(input, i1, i2) {
    if (i1 === input.length || i2 === input.length) return 0;

    memo[i1] = memo[i1] || [];
    if (typeof memo[i1][i2] !== 'undefined') {
      return memo[i1][i2];
    }

    if (i1 !== i2 && input[i1] === input[i2]) {
      memo[i1][i2] = 1 + helper(input, i1 + 1, i2 + 1);
    } else {
      const c1 = helper(input, i1, i2 + 1);
      const c2 = helper(input, i1 + 1, i2);
      memo[i1][i2] = Math.max(c1, c2);
    }

    return memo[i1][i2];
  }
};

export default getLRSLength;
