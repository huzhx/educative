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

const bottomUp = (nums, sum) => {
  const dp = new Array(nums.length).fill(null).map((_) => new Array(sum + 1).fill(false));
  for (let i = 0; i < dp.length; i++) {
    dp[i][0] = true;
  }
  for (let s = 1; s <= sum; s++) {
    dp[0][s] = nums[0] === s;
  }
  for (let i = 1; i < nums.length; i++) {
    for (let s = 1; s <= sum; s++) {
      dp[i][s] = dp[i - 1][s];
      if (nums[i] <= s) {
        dp[i][s] = dp[i][s] || dp[i - 1][s - nums[i]];
      }
    }
  }
  return dp[nums.length - 1][sum];
};

const bottomUpSpaceOptimization = (nums, sum) => {
  const dp = new Array(sum + 1).fill(false);
  dp[0] = true;
  for (let s = 1; s <= sum; s++) {
    dp[s] = nums[0] === s;
  }
  for (let i = 1; i < nums.length; i++) {
    for (let s = sum; s >= 0; s--) {
      if (!dp[s] && nums[i] <= s) {
        dp[s] = dp[s - nums[i]];
      }
    }
  }
  return dp[sum];
};

export { subsetSum, bottomUp, bottomUpSpaceOptimization };
