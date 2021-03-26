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

const topDown = (nums) => {
  const total = nums.reduce((a, b) => a + b, 0);
  const memo = [];
  return helper(nums, 0, 0);

  function helper(nums, curIndex, curSum) {
    if (curIndex === nums.length) {
      return Math.abs(curSum - (total - curSum));
    }

    memo[curIndex] = memo[curIndex] || [];
    if (typeof memo[curIndex][curSum] !== 'undefined') {
      return memo[curIndex][curSum];
    }

    const option1 = helper(nums, curIndex + 1, curSum + nums[curIndex]);
    const option2 = helper(nums, curIndex + 1, curSum);

    memo[curIndex][curSum] = Math.min(option1, option2);
    return memo[curIndex][curSum];
  }
};

export { getMinDiff, topDown };
