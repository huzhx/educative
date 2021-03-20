const topDown = (nums) => {
  const memo = {};
  const output = helper(0, -1, -Infinity);
  return output === -Infinity ? 0 : output;

  function helper(curIndex, prevIndex, curSum) {
    if (curIndex === nums.length) {
      return curSum;
    }

    const subProblemKey = `${curIndex}-${prevIndex}-${curSum}`;
    if (typeof memo[subProblemKey] !== 'undefined') {
      return memo[subProblemKey];
    }

    let count1 = -Infinity;
    if (curIndex - prevIndex === 1) {
      count1 = helper(curIndex + 1, curIndex, curSum + nums[curIndex]);
    }
    const count2 = helper(curIndex + 1, curIndex, nums[curIndex]);
    const count3 = helper(curIndex + 1, prevIndex, curSum);

    memo[subProblemKey] = Math.max(count1, count2, count3);
    return memo[subProblemKey];
  }
};

const bottomUp = (nums) => {
  if (nums.length < 1) return 0;

  let curSum = 0;
  let maxSum = -Infinity;
  for (let i = 0; i < nums.length; i++) {
    curSum = Math.max(nums[i], nums[i] + curSum);
    maxSum = Math.max(maxSum, curSum);
  }
  return maxSum;
};

const divideAndConquer = (nums) => {
  if (nums.length < 1) return 0;
  if (nums.length === 1) return nums[0];

  const left = 0;
  const right = nums.length - 1;
  const center = Math.floor((right - left) / 2);

  const maxLeftSum = divideAndConquer(nums.slice(left, center + 1));
  const maxRightSum = divideAndConquer(nums.slice(center + 1));
  const crossCenterSum = getCrossCenterSum(nums, left, right, center);

  return Math.max(maxLeftSum, maxRightSum, crossCenterSum);

  function getCrossCenterSum(nums, left, right, center) {
    if (left === right) return nums[left];
    let leftSubSum = -Infinity;
    let curSum = 0;
    for (let i = center; i >= left; i--) {
      curSum += nums[i];
      leftSubSum = Math.max(leftSubSum, curSum);
    }
    let rightSubSum = -Infinity;
    curSum = 0;
    for (let i = center; i <= right; i++) {
      curSum += nums[i];
      rightSubSum = Math.max(rightSubSum, curSum);
    }
    return leftSubSum + rightSubSum - nums[center];
  }
};

export { topDown, bottomUp, divideAndConquer };
