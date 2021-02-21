const getMaxIncreasingSubsequenceSum = (input) => {
  if (!input || input.length === 0) return 0;
  const memo = {};
  return helper(input, 0, -1);

  function helper(input, curIndex, prevIndex) {
    if (curIndex === input.length) {
      return 0;
    }

    memo[curIndex] = memo[curIndex] || [];
    if (typeof memo[curIndex][prevIndex + 1] !== 'undefined') {
      return memo[curIndex][prevIndex + 1];
    }

    let sum1 = 0;
    if (prevIndex === -1 || input[curIndex] > input[prevIndex]) {
      sum1 = input[curIndex] + helper(input, curIndex + 1, curIndex);
    }

    const sum2 = helper(input, curIndex + 1, prevIndex);

    memo[curIndex][prevIndex + 1] = Math.max(sum1, sum2);
    return memo[curIndex][prevIndex + 1];
  }
};

export default getMaxIncreasingSubsequenceSum;
