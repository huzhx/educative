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

export default getNumOfCombinations;
