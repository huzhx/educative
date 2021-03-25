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

const bottomUp = (nums) => {
  const total = nums.reduce((a, b) => a + b, 0);
  if (total % 2 !== 0) return false;
  const target = total / 2;

  const dp = new Array(nums.length).fill(null).map((_) => new Array(target + 1).fill(false));
  for (let i = 0; i < dp.length; i++) {
    dp[i][0] = true;
  }
  for (let s = 1; s <= target; s++) {
    dp[0][s] = nums[0] === s;
  }
  for (let i = 1; i < dp.length; i++) {
    for (let j = 1; j < dp[i].length; j++) {
      dp[i][j] = dp[i - 1][j];
      if (j >= nums[i]) {
        dp[i][j] = dp[i][j] || dp[i - 1][j - nums[i]];
      }
    }
  }
  return dp[nums.length - 1][target];
};

export { canPartition, topDown, bottomUp };
