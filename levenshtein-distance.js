const topDown = (str1, str2) => {
  const memo = [];
  return helper(str1, str2, 0, 0);

  function helper(str1, str2, index1, index2) {
    if (index1 === str1.length) return str2.length - index2;
    if (index2 === str2.length) return str1.length - index1;

    memo[index1] = memo[index1] || [];
    if (typeof memo[index1][index2] !== 'undefined') {
      return memo[index1][index2];
    }

    let count1 = Infinity;
    if (str1[index1] === str2[index2]) {
      count1 = helper(str1, str2, index1 + 1, index2 + 1);
    }
    const count2 = 1 + helper(str1, str2, index1 + 1, index2);
    const count3 = 1 + helper(str1, str2, index1, index2 + 1);
    const count4 = 1 + helper(str1, str2, index1 + 1, index2 + 1);

    memo[index1][index2] = Math.min(count1, count2, count3, count4);
    return memo[index1][index2];
  }
};

const bottomUp = (str1, str2) => {
  const dp = new Array(str1.length + 1).fill(null).map((_) => new Array(str2.length + 1).fill(Infinity));
  dp[0][0] = 0;
  for (let i = 0; i < dp.length; i++) {
    for (let j = 0; j < dp[i].length; j++) {
      if (i === 0 && j > 0) {
        dp[i][j] = dp[i][j - 1] + 1;
      }
      if (j === 0 && i > 0) {
        dp[i][j] = dp[i - 1][j] + 1;
      }
    }
  }
  for (let i = 1; i < dp.length; i++) {
    for (let j = 1; j < dp[i].length; j++) {
      if (str1[i - 1] !== str2[j - 1]) {
        dp[i][j] = 1 + Math.min(dp[i - 1][j - 1], dp[i - 1][j], dp[i][j - 1]);
      } else {
        dp[i][j] = dp[i - 1][j - 1];
      }
    }
  }
  return dp[str1.length][str2.length];
};

export { topDown, bottomUp };
