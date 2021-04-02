const getMaxMoney = (input) => {
  const memo = {};
  return helper(input, 0);

  function helper(input, curIndex) {
    if (input.length === 0 || curIndex >= input.length) return 0;

    if (typeof memo[curIndex] !== 'undefined') {
      return memo[curIndex];
    }

    const money1 = helper(input, curIndex + 2) + input[curIndex];

    const money2 = helper(input, curIndex + 1);

    memo[curIndex] = Math.max(money1, money2);
    return memo[curIndex];
  }
};

export { getMaxMoney };
