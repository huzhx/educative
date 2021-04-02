const getMinDeletes = (input) => {
  const memo = {};
  return helper(input, 0, -1);

  function helper(input, curIndex, prevIndex) {
    if (curIndex === input.length) return 0;

    memo[curIndex] = memo[curIndex] || [];
    if (typeof memo[curIndex][prevIndex + 1] !== 'undefined') {
      return memo[curIndex][prevIndex + 1];
    }

    let count1 = Infinity;
    if (prevIndex === -1 || input[curIndex] >= input[prevIndex]) {
      count1 = helper(input, curIndex + 1, curIndex);
    }
    const count2 = 1 + helper(input, curIndex + 1, prevIndex);

    memo[curIndex][prevIndex + 1] = Math.min(count1, count2);
    return memo[curIndex][prevIndex + 1];
  }
};

const topDown = (nums) => {
  const memo = [];
  return nums.length - helper(nums, 0, -1);

  function helper(nums, curIndex, prevIndex) {
    if (curIndex >= nums.length) return 0;

    memo[curIndex] = memo[curIndex] || [];
    if (typeof memo[curIndex][prevIndex + 1] !== 'undefined') {
      return memo[curIndex][prevIndex + 1];
    }

    let count1 = 0;
    if (prevIndex === -1 || nums[curIndex] >= nums[prevIndex]) {
      count1 = 1 + helper(nums, curIndex + 1, curIndex);
    }
    const count2 = helper(nums, curIndex + 1, prevIndex);

    memo[curIndex][prevIndex + 1] = Math.max(count1, count2);
    return memo[curIndex][prevIndex + 1];
  }
};

export { getMinDeletes, topDown };
