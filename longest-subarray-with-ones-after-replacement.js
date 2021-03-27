const topDown = (arr, k) => {
  const memo = {};
  return helper(arr, 0, -1, 0, k);

  function helper(arr, curIndex, prevOneIndex, tmp, k) {
    if (curIndex === arr.length) return tmp;

    const subProblemKey = `${curIndex}-${prevOneIndex}-${tmp}-${k}`;
    if (typeof memo[subProblemKey] !== 'undefined') {
      return memo[subProblemKey];
    }

    let option1 = 0;
    if (arr[curIndex] === 1 && curIndex - prevOneIndex === 1) {
      option1 = helper(arr, curIndex + 1, curIndex, tmp + 1, k);
    }

    let option2 = 0;
    if (arr[curIndex] === 1 && curIndex - prevOneIndex > 1) {
      option2 = helper(arr, curIndex + 1, curIndex, 1, k);
    }

    let option3 = 0;
    if (arr[curIndex] === 0 && k > 0 && curIndex - prevOneIndex === 1) {
      option3 = helper(arr, curIndex + 1, curIndex, tmp + 1, k - 1);
    }

    let option4 = 0;
    if (arr[curIndex] === 0 && k > 0 && curIndex - prevOneIndex > 1) {
      option4 = helper(arr, curIndex + 1, curIndex, 1, k - 1);
    }

    const option5 = helper(arr, curIndex + 1, prevOneIndex, tmp, k);

    memo[subProblemKey] = Math.max(option1, option2, option3, option4, option5);

    return memo[subProblemKey];
  }
};

export { topDown };
