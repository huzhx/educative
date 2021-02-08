const getNthFibNumber = (n) => {
  const memo = {};
  return helper(n);

  function helper(n) {
    if (n <= 1) return n;

    if (typeof memo[n] !== 'undefined') {
      return memo[n];
    }

    memo[n] = helper(n - 1) + helper(n - 2);
    return memo[n];
  }
};

export default getNthFibNumber;
