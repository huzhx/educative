const findMinOperationsTopDown = (str1, str2) => {
  const memo = [];
  return helper(0, 0);

  function helper(index1, index2) {
    if (index1 === str1.length && index2 === str2.length) {
      return 0;
    }
    if (index1 === str1.length) return str2.length - index2;
    if (index2 === str2.length) return str1.length - index1;

    memo[index1] = memo[index1] || [];
    if (typeof memo[index1][index2] !== 'undefined') {
      return memo[index1][index2];
    }

    let count1 = Infinity;
    if (str1[index1] === str2[index2]) {
      count1 = helper(index1 + 1, index2 + 1);
    }
    const count2 = 1 + helper(index1 + 1, index2);
    const count3 = 1 + helper(index1, index2 + 1);
    const count4 = 1 + helper(index1 + 1, index2 + 1);

    memo[index1][index2] = Math.min(count1, count2, count3, count4);
    return memo[index1][index2];
  }
};

export { findMinOperationsTopDown };
