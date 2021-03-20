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

const getNthFibNumberBottomUp = (n) => {
  if (n === 0) return 0;
  if (n === 1) return 1;

  let n_1 = 1;
  let n_2 = 0;
  let i = 2;
  let res;
  while (i <= n) {
    res = n_1 + n_2;
    n_2 = n_1;
    n_1 = res;
    i++;
  }
  return res;
};

export { getNthFibNumber, getNthFibNumberBottomUp };
