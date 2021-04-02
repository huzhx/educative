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

const topDown = (houses) => {
  const memo = [];
  return helper(houses, 0, -1);

  function helper(houses, curIndex, prevIndex) {
    if (curIndex >= houses.length) return 0;

    memo[curIndex] = memo[curIndex] || [];
    if (typeof memo[curIndex][prevIndex + 1] !== 'undefined') {
      return memo[curIndex][prevIndex + 1];
    }

    let profit1 = -Infinity;
    if (prevIndex === -1 || curIndex > prevIndex + 1) {
      profit1 = houses[curIndex] + helper(houses, curIndex + 2, curIndex);
    }
    const profit2 = helper(houses, curIndex + 1, prevIndex);

    memo[curIndex][prevIndex + 1] = Math.max(profit1, profit2);
    return memo[curIndex][prevIndex + 1];
  }
};

export { getMaxMoney, topDown };
