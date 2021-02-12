const findMPPCuts = (string) => {
  const memo = {};
  return helper(string, 0);

  function helper(string, curIndex) {
    if (string.length === 0 || curIndex >= string.length || isPanlindromic(string, curIndex, string.length - 1))
      return 0;

    if (typeof memo[curIndex] !== 'undefined') {
      return memo[curIndex];
    }

    let minCount = Infinity;
    for (let i = curIndex; i < string.length; i++) {
      if (isPanlindromic(string, curIndex, i)) {
        minCount = Math.min(minCount, 1 + helper(string, i + 1));
      }
    }
    memo[curIndex] = minCount;
    return memo[curIndex];
  }

  function isPanlindromic(string, start, end) {
    while (start < end) {
      if (string[start] === string[end]) {
        start++;
        end--;
      } else {
        return false;
      }
    }
    return true;
  }
};

export default findMPPCuts;
