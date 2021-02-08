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

export default getPossibleWaysNumber;
