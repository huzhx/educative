const isInterleaved = (m, n, p) => {
  const memo = {};
  return helper(m, n, p, 0, 0, 0);

  function helper(m, n, p, mIndex, nIndex, pIndex) {
    if (mIndex === m.length && nIndex === n.length && pIndex === p.length) return true;

    if (pIndex === p.length) return false;

    const subProblemKey = `${mIndex}-${nIndex}-${pIndex}`;

    if (typeof memo[subProblemKey] !== 'undefined') {
      return memo[subProblemKey];
    }

    let option1 = false;
    let option2 = false;

    if (mIndex < m.length && m[mIndex] === p[pIndex]) {
      option1 = helper(m, n, p, mIndex + 1, nIndex, pIndex + 1);
    }

    if (nIndex < n.length && n[nIndex] === p[pIndex]) {
      option2 = helper(m, n, p, mIndex, nIndex + 1, pIndex + 1);
    }

    memo[subProblemKey] = option1 || option2;

    return memo[subProblemKey];
  }
};

const topDown = (m, n, p) => {
  const memo = {};
  return helper(m, n, p, 0, 0, 0);

  function helper(m, n, p, mIndex, nIndex, pIndex) {
    if (mIndex === m.length && nIndex === n.length && pIndex === p.length) {
      return true;
    }
    if (pIndex === p.length || (mIndex === m.length && nIndex === n.length)) {
      return false;
    }
    if (m[mIndex] !== p[pIndex] && n[nIndex] !== p[pIndex]) {
      return false;
    }

    const subProblemKey = `${mIndex}-${nIndex}-${pIndex}`;
    if (typeof memo[subProblemKey] !== 'undefined') {
      return memo[subProblemKey];
    }

    let option1 = false;
    if (m[mIndex] === p[pIndex]) {
      option1 = helper(m, n, p, mIndex + 1, nIndex, pIndex + 1);
    }

    let option2 = false;
    if (n[nIndex] === p[pIndex]) {
      option2 = helper(m, n, p, mIndex, nIndex + 1, pIndex + 1);
    }

    memo[subProblemKey] = option1 || option2;
    return memo[subProblemKey];
  }
};

const bottomUp = (m, n, p) => {
  const dp = new Array(m.length + 1).fill(null).map((_) => new Array(n.length + 1).fill(false));
  dp[0][0] = true;
  if (m.length + n.length !== p.length) return false;

  for (let i = 1; i <= m.length; i++) {
    dp[i][0] = m[i - 1] === p[i - 1];
  }
  for (let j = 1; j <= n.length; j++) {
    dp[0][j] = n[j - 1] === p[j - 1];
  }
  for (let i = 1; i <= m.length; i++) {
    for (let j = 1; j <= n.length; j++) {
      if (p[i + j - 1] === m[i - 1]) {
        dp[i][j] = dp[i - 1][j];
      }
      if (p[i + j - 1] === n[j - 1]) {
        dp[i][j] = dp[i][j] || dp[i][j - 1];
      }
    }
  }
  return dp[m.length][n.length];
};

export { isInterleaved, topDown, bottomUp };
