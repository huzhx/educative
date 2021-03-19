const findLASLengthTopDown = (input) => {
  const memo = [];
  return Math.max(helper(input, 0, -1, true), helper(input, 0, -1, false));

  function helper(input, curIndex, prevIndex, isAsc) {
    if (curIndex === input.length) return 0;

    memo[curIndex] = memo[curIndex] || [];
    memo[curIndex][prevIndex + 1] = memo[curIndex][prevIndex + 1] || [];
    if (typeof memo[curIndex][prevIndex + 1][isAsc ? 1 : 0] !== 'undefined') {
      return memo[curIndex][prevIndex + 1][isAsc ? 1 : 0];
    }

    let count1 = 0;
    if (isAsc) {
      if (prevIndex === -1 || input[curIndex] < input[prevIndex]) {
        count1 = 1 + helper(input, curIndex + 1, curIndex, !isAsc);
      }
    } else {
      if (prevIndex === -1 || input[curIndex] > input[prevIndex]) {
        count1 = 1 + helper(input, curIndex + 1, curIndex, !isAsc);
      }
    }

    const count2 = helper(input, curIndex + 1, prevIndex, isAsc);

    memo[curIndex][prevIndex + 1][isAsc ? 1 : 0] = Math.max(count1, count2);
    return memo[curIndex][prevIndex + 1][isAsc ? 1 : 0];
  }
};

const findLASLengthBottomUp = (nums) => {
  if (nums.length === 0) return 0;
  const dp = new Array(nums.length).fill(0).map((_) => new Array(2).fill(0));

  let maxLength = 1;
  for (let i = 0; i < nums.length; i++) {
    dp[i][0] = dp[i][1] = 1;
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        dp[i][0] = Math.max(dp[i][0], 1 + dp[j][1]);
        maxLength = Math.max(maxLength, dp[i][0]);
      } else if (nums[i] < nums[j]) {
        dp[i][1] = Math.max(dp[i][1], 1 + dp[j][0]);
        maxLength = Math.max(maxLength, dp[i][1]);
      }
    }
  }
  return maxLength;
};

export { findLASLengthTopDown, findLASLengthBottomUp };
