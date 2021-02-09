const getMinFee = (stairsNum, fee) => {
  const memo = {};
  return helper(stairsNum, fee, 0);

  function helper(stairsNum, fee, curIndex) {
    if (stairsNum === 0 || fee.length === 0 || curIndex > fee.length - 1) return 0;

    if (typeof memo[curIndex] !== 'undefined') {
      return memo[curIndex];
    }

    const option1 = helper(stairsNum, fee, curIndex + 1);
    const option2 = helper(stairsNum, fee, curIndex + 2);
    const option3 = helper(stairsNum, fee, curIndex + 3);

    memo[curIndex] = Math.min(option1, option2, option3) + fee[curIndex];
    return memo[curIndex];
  }
};

export default getMinFee;
