const getMinDelIns = (s1, s2) => {
  if (s1.length === 0 && s2.length === 0) {
    return [0, 0];
  }

  if (s1.length === 0) {
    return [0, s2.length];
  }

  if (s2.length === 0) {
    return [s1.length, 0];
  }

  const memo = {};
  const longestCommonSubsequenceLength = helper(s1, s2, 0, 0);
  return [s1.length - longestCommonSubsequenceLength, s2.length - longestCommonSubsequenceLength];

  function helper(s1, s2, i1, i2) {
    if (i1 === s1.length || i2 === s2.length) return 0;

    memo[i1] = memo[i1] || [];
    if (typeof memo[i1][i2] !== 'undefined') {
      return memo[i1][i2];
    }

    if (s1[i1] === s2[i2]) {
      memo[i1][i2] = 1 + helper(s1, s2, i1 + 1, i2 + 1);
    } else {
      const count1 = helper(s1, s2, i1 + 1, i2);
      const count2 = helper(s1, s2, i1, i2 + 1);
      memo[i1][i2] = Math.max(count1, count2);
    }
    return memo[i1][i2];
  }
};

export default getMinDelIns;
