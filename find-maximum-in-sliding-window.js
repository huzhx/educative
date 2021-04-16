const findMax = (nums, windowSize) => {
  const output = [];

  if (nums.length === 0) return output;

  const deque = [];
  for (let i = 0; i < windowSize; i++) {
    while (deque.length > 0 && nums[i] >= nums[deque[deque.length - 1]]) {
      deque.pop();
    }
    deque.push(i);
  }
  output.push(nums[deque[0]]);

  for (let i = windowSize; i < nums.length; i++) {
    while (deque.length > 0 && nums[i] >= nums[deque[deque.length - 1]]) {
      deque.pop();
    }
    if (deque.length > 0 && deque[0] <= i - windowSize) {
      deque.shift();
    }
    deque.push(i);
    output.push(nums[deque[0]]);
  }

  return output;
};

export default findMax;
