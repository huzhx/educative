const search = (nums, target) => {
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2);
    if (nums[mid] === target) {
      return mid;
    }
    if (target > nums[mid]) {
      if (target <= nums[right] || nums[right] < nums[mid]) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    } else {
      if (nums[left] > nums[mid] || nums[left] <= target) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }
  }

  return -1;
};

export default search;
