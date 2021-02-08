const getMinCoinsNumber = (denominations, total) => {
  const memo = {};
  const result = backtrack(denominations, total, 0);
  return result === Infinity ? -1 : result;

  function backtrack(denominations, total, curIndex) {
    if (denominations.length === 0 || total < 0 || curIndex >= denominations.length) {
      return Infinity;
    }
    if (total === 0) return 0;

    memo[curIndex] = memo[curIndex] || [];
    if (typeof memo[curIndex][total] !== 'undefined') {
      return memo[curIndex][total];
    }

    let minCoinsNumber1 = Infinity;
    if (denominations[curIndex] <= total) {
      minCoinsNumber1 = 1 + backtrack(denominations, total - denominations[curIndex], curIndex);
    }
    const minCoinsNumber2 = backtrack(denominations, total, curIndex + 1);

    memo[curIndex][total] = Math.min(minCoinsNumber1, minCoinsNumber2);
    return memo[curIndex][total];
  }
};

export default getMinCoinsNumber;
