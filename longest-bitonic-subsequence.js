const findLBSLength = (nums) => {
  const ldsMemo = [];
  const ldsRevMemo = [];
  let maxLength = 0;

  for (let i = 0; i < nums.length; i++) {
    const c1 = findLDSLength(nums, i, -1);
    const c2 = findLDSLengthRev(nums, i, -1);
    maxLength = Math.max(maxLength, c1 + c2 - 1);
  }

  return maxLength;

  function findLDSLength(nums, curIndex, prevIndex) {
    if (curIndex === nums.length) return 0;

    ldsMemo[curIndex] = ldsMemo[curIndex] || [];
    if (typeof ldsMemo[curIndex][prevIndex + 1] !== 'undefined') {
      return ldsMemo[curIndex][prevIndex + 1];
    }

    let count1 = 0;
    if (prevIndex === -1 || nums[curIndex] < nums[prevIndex]) {
      count1 = 1 + findLDSLength(nums, curIndex + 1, curIndex);
    }
    const count2 = findLDSLength(nums, curIndex + 1, prevIndex);

    ldsMemo[curIndex][prevIndex + 1] = Math.max(count1, count2);
    return ldsMemo[curIndex][prevIndex + 1];
  }

  function findLDSLengthRev(nums, curIndex, prevIndex) {
    if (curIndex < 0) return 0;

    ldsRevMemo[curIndex] = ldsRevMemo[curIndex] || [];
    if (typeof ldsRevMemo[curIndex][prevIndex + 1] !== 'undefined') {
      return ldsRevMemo[curIndex][prevIndex + 1];
    }

    let count1 = 0;
    if (prevIndex === -1 || nums[curIndex] < nums[prevIndex]) {
      count1 = 1 + findLDSLengthRev(nums, curIndex - 1, curIndex);
    }
    const count2 = findLDSLengthRev(nums, curIndex - 1, prevIndex);

    ldsRevMemo[curIndex][prevIndex + 1] = Math.max(count1, count2);
    return ldsRevMemo[curIndex][prevIndex + 1];
  }
};

export default findLBSLength;
