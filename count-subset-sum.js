const countSubsetSum = (nums, sum) => {
  const memo = [];

  return backtrack(nums, 0, sum);

  function backtrack(nums, curIndex, target) {
    if (target === 0) {
      return 1;
    }
    if (nums.length === 0 || curIndex >= nums.length) {
      return 0;
    }

    memo[curIndex] = memo[curIndex] || [];
    if (typeof memo[curIndex][target] !== 'undefined') {
      return memo[curIndex][target];
    }

    let sum1 = 0;
    if (nums[curIndex] <= target) {
      sum1 = backtrack(nums, curIndex + 1, target - nums[curIndex]);
    }

    const sum2 = backtrack(nums, curIndex + 1, target);

    memo[curIndex][target] = sum1 + sum2;
    return memo[curIndex][target];
  }
};

module.exports = countSubsetSum;
