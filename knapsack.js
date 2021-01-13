const solveKnapsack = (profits, weights, capacity) => {
  return backtrack(profits, weights, capacity, 0);

  function backtrack(profits, weights, capacity, curIndex) {
    if (capacity <= 0 || curIndex >= profits.length) {
      return 0;
    }

    let profit1 = 0;
    if (weights[curIndex] <= capacity) {
      profit1 = profits[curIndex] + backtrack(profits, weights, capacity - weights[curIndex], curIndex + 1);
    }

    const profit2 = backtrack(profits, weights, capacity, curIndex + 1);

    return Math.max(profit1, profit2);
  }
};

const solveKnapsackWithMemo = (profits, weights, capacity) => {
  const dp = [];
  return backtrack(profits, weights, capacity, 0);

  function backtrack(profits, weights, capacity, curIndex) {
    if (capacity <= 0 || curIndex >= profits.length) {
      return 0;
    }

    dp[curIndex] = dp[curIndex] || [];
    if (typeof dp[curIndex][capacity] !== 'undefined') {
      return dp[curIndex][capacity];
    }

    let profit1 = 0;
    if (weights[curIndex] <= capacity) {
      profit1 = profits[curIndex] + backtrack(profits, weights, capacity - weights[curIndex], curIndex + 1);
    }

    const profit2 = backtrack(profits, weights, capacity, curIndex + 1);

    dp[curIndex][capacity] = Math.max(profit1, profit2);
    return dp[curIndex][capacity];
  }
};

module.exports = { solveKnapsack, solveKnapsackWithMemo };
