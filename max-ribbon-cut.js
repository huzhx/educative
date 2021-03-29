const getMaxPiecesNumber = (length, lengths) => {
  const memo = {};
  const res = backtrack(length, lengths, 0);
  return res === -Infinity ? -1 : res;

  function backtrack(length, lengths, curIndex) {
    if (lengths.length === 0 || length < 0 || curIndex >= lengths.length) {
      return -Infinity;
    }
    if (length === 0) {
      return 0;
    }

    memo[curIndex] = memo[curIndex] || [];
    if (typeof memo[curIndex][length] !== 'undefined') {
      return memo[curIndex][length];
    }

    let count1 = -Infinity;
    if (lengths[curIndex] <= length) {
      const res = backtrack(length - lengths[curIndex], lengths, curIndex);
      if (res !== -Infinity) {
        count1 = 1 + res;
      }
    }
    let count2 = backtrack(length, lengths, curIndex + 1);

    memo[curIndex][length] = Math.max(count1, count2);
    return memo[curIndex][length];
  }
};

const topDown = (length, lengths) => {
  const memo = [];
  return helper(lengths, 0, length);

  function helper(lengths, curIndex, length) {
    if (length === 0) return 0;
    if (curIndex === lengths.length) return -Infinity;

    memo[curIndex] = memo[curIndex] || [];
    if (typeof memo[curIndex][length] !== 'undefined') {
      return memo[curIndex][length];
    }

    let option1 = -Infinity;
    if (lengths[curIndex] <= length) {
      option1 = 1 + helper(lengths, curIndex, length - lengths[curIndex]);
    }
    const option2 = helper(lengths, curIndex + 1, length);

    memo[curIndex][length] = Math.max(option1, option2);
    return memo[curIndex][length];
  }
};

export { getMaxPiecesNumber, topDown };
