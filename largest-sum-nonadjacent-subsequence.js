const topDown = (nums) => {
  const memo = [];
  const output = helper(nums, 0, -1, -Infinity);
  return output === -Infinity ? 0 : output;

  function helper(nums, curIndex, prevIndex, curSum) {
    if (curIndex === nums.length) return curSum;

    const subproblemKey = `${curIndex}-${prevIndex}-${curSum}`;
    if (typeof memo[subproblemKey] !== 'undefined') {
      return memo[subproblemKey];
    }

    let count1 = -Infinity;
    if (prevIndex === -1 || curIndex - prevIndex > 1) {
      count1 = helper(nums, curIndex + 1, curIndex, curSum === -Infinity ? nums[curIndex] : curSum + nums[curIndex]);
    }
    const count2 = helper(nums, curIndex + 1, prevIndex, curSum);

    memo[subproblemKey] = Math.max(count1, count2);
    return memo[subproblemKey];
  }
};

const bottomUp = (nums) => {
  if (nums.length === 0) return 0;
  if (nums.length === 1) return nums[0];

  const dp = new Array(nums.length).fill(0);
  dp[0] = nums[0];
  dp[1] = Math.max(nums[0], nums[1]);
  for (let i = 2; i < nums.length; i++) {
    dp[i] = Math.max(nums[i], nums[i] + dp[i - 2], dp[i - 1]);
  }
  return dp[nums.length - 1];
};

const bottomUpSpaceOptimization = (nums) => {
  if (nums.length === 0) return 0;
  if (nums.length === 1) return nums[0];

  let i_2 = nums[0];
  let i_1 = Math.max(nums[0], nums[1]);
  for (let i = 2; i < nums.length; i++) {
    const cur = Math.max(nums[i], nums[i] + i_2, i_1);
    i_2 = i_1;
    i_1 = cur;
  }
  return i_1;
};

export { topDown, bottomUp, bottomUpSpaceOptimization };
