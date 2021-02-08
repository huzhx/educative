const getNumberOfWays = (n) => {
  const memo = {};
  return helper(n);

  function helper(n) {
    if (n === 0) return 1;
    if (n < 0) return 0;

    if (typeof memo[n] !== 'undefined') {
      return memo[n];
    }

    memo[n] = helper(n - 1) + helper(n - 3) + helper(n - 4);

    return memo[n];
  }
};

export default getNumberOfWays;
