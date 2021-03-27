const getMaxProfitCombination = (items, weights, profits, capacity) => {
  const items_transformed = [];
  for (let i = 0; i < items.length; i++) {
    const name = items[i];
    const weight = weights[i];
    const profit = profits[i];
    items_transformed.push(new Item(name, weight, profit));
  }
  const memo = {};
  let maxProfit = -Infinity;
  let output;
  backtrack(0, [], 0, 0);
  return output;

  function backtrack(curIndex, tmp, curProfit, curCapacity) {
    if (curCapacity === capacity) {
      if (curProfit > maxProfit) {
        maxProfit = curProfit;
        output = [...tmp];
      }
      return curProfit;
    }

    memo[curIndex] = memo[curIndex] || [];
    if (typeof memo[curIndex][curCapacity] !== 'undefined') {
      return memo[curIndex][curCapacity];
    }

    let curMax = -Infinity;

    for (let i = curIndex; i < items.length; i++) {
      if (items_transformed[i].weight + curCapacity <= capacity) {
        tmp.push(items_transformed[i].name);
        curProfit += items_transformed[i].profit;
        curMax = Math.max(curMax, backtrack(i, tmp, curProfit, curCapacity + items_transformed[i].weight));
        curProfit -= items_transformed[i].profit;
        tmp.pop();
      }
    }

    memo[curIndex][curCapacity] = curMax;
    return memo[curIndex][curCapacity];
  }
};

class Item {
  constructor(name, weight, profit) {
    this.name = name;
    this.weight = weight;
    this.profit = profit;
  }
}

const topDown = (items, weights, profits, capacity) => {
  const memo = [];
  return helper(items, 0, capacity);

  function helper(items, curIndex, capacity) {
    if (capacity === 0 || curIndex === items.length) return 0;

    memo[curIndex] = memo[curIndex] || [];
    if (typeof memo[curIndex][capacity] !== 'undefined') {
      return memo[curIndex][capacity];
    }

    let option1 = -Infinity;
    if (weights[curIndex] <= capacity) {
      option1 = helper(items, curIndex, capacity - weights[curIndex]) + profits[curIndex];
    }
    const option2 = helper(items, curIndex + 1, capacity);

    memo[curIndex][capacity] = Math.max(option1, option2);
    return memo[curIndex][capacity];
  }
};

export { getMaxProfitCombination, topDown };
