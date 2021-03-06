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

const bottomUp = (denominations, total) => {
  const dp = new Array(denominations.length).fill(null).map((_) => new Array(total + 1).fill(Infinity));
  for (let i = 0; i < dp.length; i++) {
    for (let j = 0; j < dp[i].length; j++) {
      if (j === 0) {
        dp[i][j] = 0;
      } else {
        if (i > 0) {
          dp[i][j] = dp[i - 1][j];
        }
        if (j >= denominations[i]) {
          dp[i][j] = Math.min(dp[i][j], dp[i][j - denominations[i]] + 1);
        }
      }
    }
  }

  const output = dp[denominations.length - 1][total];
  return output === Infinity ? -1 : output;
};

const greedy = (coins, amount) => {
  coins.sort((a, b) => b - a);
  let min = Infinity;
  backtrack(0, amount, 0);
  return min === Infinity ? -1 : min;

  function backtrack(curIndex, amount, curCount) {
    const coin = coins[curIndex];

    if (curIndex === coins.length - 1) {
      if (amount % coin === 0) {
        curCount += amount / coin;
        min = Math.min(min, curCount);
        return;
      }
    } else {
      for (let k = Math.floor(amount / coin); k >= 0 && k + curCount < min; k--) {
        backtrack(curIndex + 1, amount - k * coin, curCount + k);
      }
    }
  }
};

export { getMinCoinsNumber, topDown, bottomUp, greedy };
