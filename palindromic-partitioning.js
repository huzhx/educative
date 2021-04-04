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

const topDown = (string) => {
  const memo = [];
  return findCuts(string, 0, string.length - 1);

  function findCuts(string, start, end) {
    if (start >= end || isPalindrome(string, start, end)) {
      return 0;
    }

    let min = end - start;
    for (let i = start; i <= end; i++) {
      if (isPalindrome(string, start, i)) {
        min = Math.min(min, 1 + findCuts(string, i + 1, end));
      }
    }

    return min;
  }

  function isPalindrome(string, start, end) {
    memo[start] = memo[start] || [];
    if (typeof memo[start][end] !== 'undefined') {
      return memo[start][end];
    }

    let i = start;
    let j = end;

    while (i < j) {
      if (string[i] !== string[j]) {
        memo[start][end] = false;
        return memo[start][end];
      }
      i++;
      j--;
      memo[i] = memo[i] || [];
      if (typeof memo[i][j] !== 'undefined') {
        memo[start][end] = memo[i][j];
        return memo[start][end];
      }
    }

    memo[start][end] = true;
    return memo[start][end];
  }
};

export { findMPPCuts, topDown };
