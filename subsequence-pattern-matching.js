const countPatternTimes = (input, pattern) => {
  const memo = {};
  return helper(input, pattern, 0, 0);

  function helper(input, pattern, inputIndex, patternIndex) {
    if (patternIndex === pattern.length) {
      return 1;
    }
    if (inputIndex === input.length) {
      return 0;
    }

    memo[inputIndex] = memo[inputIndex] || [];
    if (typeof memo[inputIndex][patternIndex] !== 'undefined') {
      return memo[inputIndex][patternIndex];
    }

    let count1 = 0;
    if (input[inputIndex] === pattern[patternIndex]) {
      count1 = helper(input, pattern, inputIndex + 1, patternIndex + 1);
    }

    const count2 = helper(input, pattern, inputIndex + 1, patternIndex);

    memo[inputIndex][patternIndex] = count1 + count2;
    return memo[inputIndex][patternIndex];
  }
};

export default countPatternTimes;
