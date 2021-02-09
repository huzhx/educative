const getMinJumps = (input) => {
  const memo = {};
  const result = helper(input, 0);
  return result === Infinity ? -1 : result;

  function helper(input, curIndex) {
    if (input.length === 0 || curIndex >= input.length || input[curIndex] === 0) {
      return Infinity;
    }

    if (curIndex === input.length - 1) {
      return 0;
    }

    if (typeof memo[curIndex] !== 'undefined') {
      return memo[curIndex];
    }

    const maxSteps = input[curIndex];
    let minJumps = Infinity;
    for (let i = 1; i <= maxSteps; i++) {
      const steps = helper(input, curIndex + i);
      if (steps !== Infinity) {
        minJumps = Math.min(minJumps, 1 + steps);
      }
    }

    memo[curIndex] = minJumps;
    return memo[curIndex];
  }
};

export default getMinJumps;
