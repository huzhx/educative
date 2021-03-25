const canPartition = (nums) => {
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
  }
  if (sum % 2 !== 0) return false;
  return backtrack(nums, sum / 2, 0);

  function backtrack(nums, sum, curIndex) {
    // base check
    if (sum === 0) return true;

    if (nums.length === 0 || curIndex >= nums.length) return false;

    if (nums[curIndex] <= sum) {
      if (backtrack(nums, sum - nums[curIndex], curIndex + 1)) return true;
    }

    return backtrack(nums, sum, curIndex + 1);
  }
};

const topDown = (nums) => {
  const total = nums.reduce((a, b) => a + b, 0);
  if (total % 2 !== 0) return false;
  const target = total / 2;
  const memo = [];
  return helper(nums, 0, target);

  function helper(nums, curIndex, target) {
    if (target === 0) return true;
    if (curIndex >= nums.length) return false;

    memo[curIndex] = memo[curIndex] || [];
    if (typeof memo[curIndex][target] !== 'undefined') {
      return memo[curIndex][target];
    }

    let option1 = false;
    if (nums[curIndex] <= target) {
      option1 = helper(nums, curIndex + 1, target - nums[curIndex]);
    }

    const option2 = helper(nums, curIndex + 1, target);

    memo[curIndex][target] = option1 || option2;
    return memo[curIndex][target];
  }
};

export { canPartition, topDown };
