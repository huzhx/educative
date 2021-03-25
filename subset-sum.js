const subsetSum = (nums, sum) => {
  const memo = [];
  return backtrack(nums, sum, 0);

  function backtrack(nums, sum, curIndex) {
    if (nums[curIndex] === sum) return true;

    if (curIndex === nums.length || nums[curIndex] > sum) return false;

    memo[curIndex] = memo[curIndex] || [];
    if (typeof memo[curIndex][sum] !== 'undefined') {
      return memo[curIndex][sum];
    }

    memo[curIndex][sum] = backtrack(nums, sum - nums[curIndex], curIndex + 1) || backtrack(nums, sum, curIndex + 1);

    return memo[curIndex][sum];
  }
};

export { subsetSum };
