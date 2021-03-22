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

export { canPartition };
