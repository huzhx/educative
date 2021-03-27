const getPossibleWaysNumber = (stairsNumber) => {
  const memo = {};
  return helper(stairsNumber);

  function helper(stairsNumber) {
    if (stairsNumber < 0) return 0;

    if (stairsNumber === 0) return 1;

    if (typeof memo[stairsNumber] !== 'undefined') {
      return memo[stairsNumber];
    }

    memo[stairsNumber] = helper(stairsNumber - 1) + helper(stairsNumber - 2) + helper(stairsNumber - 3);

    return memo[stairsNumber];
  }
};

const topDown = (stairsNumber) => {
  const memo = [];
  return helper(stairsNumber);

  function helper(stairsNumber) {
    if (stairsNumber < 0) return 0;
    if (stairsNumber === 0) return 1;

    if (typeof memo[stairsNumber] !== 'undefined') {
      return memo[stairsNumber];
    }

    memo[stairsNumber] = helper(stairsNumber - 1) + helper(stairsNumber - 2) + helper(stairsNumber - 3);
    return memo[stairsNumber];
  }
};

const bottomUp = (stairsNumber) => {
  const dp = [0, 0, 0, 1];
  let sum = 1;
  for (let i = 1; i <= stairsNumber; i++) {
    const pop = dp.shift();
    sum -= pop;
    dp.push(sum);
    sum += sum;
  }
  return dp[3];
};

export { getPossibleWaysNumber, topDown, bottomUp };
