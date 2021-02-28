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

export default getMinDeletes;
