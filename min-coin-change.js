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
      const res = backtrack(denominations, total - denominations[curIndex], curIndex);
      if (res !== Infinity) {
        minCoinsNumber1 = 1 + res;
      }
    }
    const minCoinsNumber2 = backtrack(denominations, total, curIndex + 1);

    memo[curIndex][total] = Math.min(minCoinsNumber1, minCoinsNumber2);
    return memo[curIndex][total];
  }
};

const topDown = (denominations, total) => {
  const memo = [];
  const output = helper(denominations, total);
  return output === Infinity ? -1 : output;

  function helper(denominations, total) {
    if (total === 0) return 0;
    if (total < 0) return Infinity;

    if (typeof memo[total] !== 'undefined') {
      return memo[total];
    }

    let minCoinCount = Infinity;
    for (let denomination of denominations) {
      const coinCount = 1 + helper(denominations, total - denomination);
      minCoinCount = Math.min(minCoinCount, coinCount);
    }

    memo[total] = minCoinCount;
    return memo[total];
  }
};

const bottomUp = (denominations, total) => {};

export { getMinCoinsNumber, topDown, bottomUp };
