const getMinDiff = (nums) => {
  const memo = [];
  return backtrack(0, 0, 0);

  function backtrack(sum1, sum2, curIndex) {
    if (curIndex === nums.length) return Math.abs(sum1 - sum2);

    memo[curIndex] = memo[curIndex] || [];
    if (typeof memo[curIndex][sum1] !== 'undefined') {
      return memo[curIndex][sum1];
    }

    const output1 = backtrack(sum1 + nums[curIndex], sum2, curIndex + 1);
    const output2 = backtrack(sum1, sum2 + nums[curIndex], curIndex + 1);

    memo[curIndex][sum1] = Math.min(output1, output2);

    return memo[curIndex][sum1];
  }
};

module.exports = getMinDiff;
