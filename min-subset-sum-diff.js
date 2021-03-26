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

const bottomUp = (nums) => {
  const total = nums.reduce((a, b) => a + b, 0);
  const target = Math.floor(total / 2);
  const dp = new Array(nums.length).fill(null).map((_) => new Array(target + 1));

  for (let i = 0; i < nums.length; i++) {
    dp[i][0] = true;
  }

  for (let s = 1; s <= target; s++) {
    dp[0][s] = nums[0] === s;
  }

  for (let i = 1; i < nums.length; i++) {
    for (let s = 1; s <= target; s++) {
      if (dp[i - 1][s]) {
        dp[i][s] = dp[i - 1][s];
      } else if (s >= nums[i]) {
        dp[i][s] = dp[i - 1][s - nums[i]];
      }
    }
  }

  for (let s = target; s >= 0; s--) {
    if (dp[nums.length - 1][s]) {
      return total - 2 * s;
    }
  }
};

export { getMinDiff, topDown, bottomUp };
