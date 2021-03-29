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

export { getMaxPiecesNumber };
