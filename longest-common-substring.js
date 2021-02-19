const findLCSLength = (s1, s2) => {
  if (s1.length === 0 || s2.length === 0) return 0;
  const memo = [];
  return helper(s1, s2, 0, 0, 0);

  function helper(s1, s2, i1, i2, count) {
    if (i1 === s1.length || i2 === s2.length) return count;

    memo[i1] = memo[i1] || [];
    memo[i1][i2] = memo[i1][i2] || [];
    if (typeof memo[i1][i2][count] !== 'undefined') {
      return memo[i1][i2][count];
    }

    let count1 = count;
    if (s1[i1] === s2[i2]) {
      count1 = helper(s1, s2, i1 + 1, i2 + 1, count + 1);
    }
    const count2 = helper(s1, s2, i1 + 1, i2, 0);
    const count3 = helper(s1, s2, i1, i2 + 1, 0);

    memo[i1][i2][count] = Math.max(count1, count2, count3);

    return memo[i1][i2][count];
  }
};

export default findLCSLength;
