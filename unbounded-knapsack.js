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

export { getMaxProfitCombination };
