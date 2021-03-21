const getNumOfCombinations = (denominations, total) => {
  const memo = {};
  return backtrack(denominations, total, 0);

  function backtrack(denominations, total, curIndex) {
    if (denominations.length <= 0 || total < 0 || curIndex >= denominations.length) {
      return 0;
    }

    if (total === 0) return 1;

    memo[curIndex] = memo[curIndex] || [];
    if (typeof memo[curIndex][total] !== 'undefined') {
      return memo[curIndex][total];
    }

    let combinationNum1 = 0;
    if (denominations[curIndex] <= total) {
      combinationNum1 = backtrack(denominations, total - denominations[curIndex], curIndex);
    }
    let combinationNum2 = backtrack(denominations, total, curIndex + 1);

    memo[curIndex][total] = combinationNum1 + combinationNum2;

    return memo[curIndex][total];
  }
};

const topDown = (denominations, total) => {
  const memo = [];
  return helper(denominations, 0, total);

  function helper(denominations, curIndex, total) {
    if (curIndex >= denominations.length) return 0;
    if (total === 0) return 1;

    memo[curIndex] = memo[curIndex] || [];
    if (typeof memo[curIndex][total] !== 'undefined') {
      return memo[curIndex][total];
    }

    let count1 = 0;
    if (denominations[curIndex] <= total) {
      count1 = helper(denominations, curIndex, total - denominations[curIndex]);
    }

    const count2 = helper(denominations, curIndex + 1, total);

    memo[curIndex][total] = count1 + count2;
    return memo[curIndex][total];
  }
};

const bottomUp = (denominations, total) => {
  const dp = new Array(total + 1).fill(0);
  dp[0] = 1;
  for (let i = 0; i < denominations.length; i++) {
    const coin = denominations[i];
    for (let j = coin; j <= total; j++) {
      dp[j] += dp[j - coin];
    }
  }
  return dp[dp.length - 1];
};

export { getNumOfCombinations, topDown, bottomUp };
