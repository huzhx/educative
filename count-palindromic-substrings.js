const countPalindromicSubstrings = (string) => {
  const memo = {};
  return helper(string, 0, string.length - 1);

  function helper(string, start, end) {
    if (start > end) return 0;
    if (start === end) return 1;

    memo[start] = memo[start] || [];
    if (typeof memo[start][end] !== 'undefined') {
      return memo[start][end];
    }

    let totalPSCount = 0;
    if (isPalindromic(string, start, end)) {
      totalPSCount++;
    }

    totalPSCount += helper(string, start + 1, end);
    totalPSCount += helper(string, start, end - 1);
    totalPSCount -= helper(string, start + 1, end - 1);

    memo[start][end] = totalPSCount;
    return memo[start][end];
  }

  function isPalindromic(string, start, end) {
    while (start <= end) {
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

export default countPalindromicSubstrings;
