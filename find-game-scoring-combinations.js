const topDown = (score) => {
  const memo = [];
  return helper(score);

  function helper(score) {
    if (score === 0) return 1;
    if (score < 0) return 0;

    if (typeof memo[score] !== 'undefined') {
      return memo[score];
    }

    const option1 = helper(score - 1);
    const option2 = helper(score - 2);
    const option3 = helper(score - 4);

    memo[score] = option1 + option2 + option3;
    return memo[score];
  }
};

const bottomUp = (score) => {
  if (score <= 0) return 0;

  const result = [0, 0, 0, 1]; // n-4, n-3, n-2, n-1
  for (let i = 1; i <= score; i++) {
    let curCount = result[3] + result[2] + result[0]; // n-4, n-2, n-1
    result.shift();
    result.push(curCount);
  }

  return result[3];
};

export { topDown, bottomUp };
