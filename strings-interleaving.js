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

export { isInterleaved };
