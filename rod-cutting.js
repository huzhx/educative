const getMaxProfit = (lengths, prices, rodLength) => {
  const memo = {};
  return backtrack(lengths, prices, 0, rodLength);

  function backtrack(lengths, prices, curIndex, remainingRodLength) {
    if (
      lengths.length === 0 ||
      lengths.length !== prices.length ||
      curIndex >= lengths.length ||
      remainingRodLength < 0
    ) {
      return 0;
    }

    memo[curIndex] = memo[curIndex] || [];
    if (typeof memo[curIndex][remainingRodLength] !== 'undefined') {
      return memo[curIndex][remainingRodLength];
    }

    let profit1 = 0;
    if (lengths[curIndex] <= remainingRodLength) {
      profit1 = prices[curIndex] + backtrack(lengths, prices, curIndex, remainingRodLength - lengths[curIndex]);
    }
    let profit2 = backtrack(lengths, prices, curIndex + 1, remainingRodLength);

    memo[curIndex][remainingRodLength] = Math.max(profit1, profit2);
    return memo[curIndex][remainingRodLength];
  }
};

const topDown = (lengths, prices, rodLength) => {
  const memo = [];
  return helper(lengths, 0, rodLength);

  function helper(lengths, curIndex, rodLength) {
    if (rodLength === 0) return 0;
    if (curIndex >= lengths.length) return -Infinity;

    memo[curIndex] = memo[curIndex] || [];
    if (typeof memo[curIndex][rodLength] !== 'undefined') {
      return memo[curIndex][rodLength];
    }

    let profit1 = -Infinity;
    if (lengths[curIndex] <= rodLength) {
      profit1 = prices[curIndex] + helper(lengths, curIndex, rodLength - lengths[curIndex]);
    }
    const profit2 = helper(lengths, curIndex + 1, rodLength);

    memo[curIndex][rodLength] = Math.max(profit1, profit2);
    return memo[curIndex][rodLength];
  }
};

const bottomUp = (lengths, prices, rodLength) => {
  if (rodLength === 0 || prices.length === 0 || prices.length !== lengths.length) return 0;

  const dp = new Array(lengths.length).fill(null).map((_) => new Array(rodLength + 1).fill(-Infinity));

  for (let i = 0; i < lengths.length; i++) {
    dp[i][0] = 0;
  }

  for (let i = 0; i < lengths.length; i++) {
    for (let j = 1; j <= rodLength; j++) {
      let profit1 = -Infinity;
      let profit2 = -Infinity;
      if (i > 0) {
        profit1 = dp[i - 1][j];
      }
      if (lengths[i] <= j) {
        profit2 = prices[i] + dp[i][j - lengths[i]];
      }
      dp[i][j] = Math.max(profit1, profit2);
    }
  }

  return dp[lengths.length - 1][rodLength];
};

export { getMaxProfit, topDown, bottomUp };
