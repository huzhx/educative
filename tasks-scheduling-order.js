const findTopOrder = (tasks, prerequisites) => {
  const map = new Array(tasks).fill(null).map((_) => new Array());
  const indegress = new Array(tasks).fill(0);
  const queue = [];
  const topOrder = [];

  for (let [parent, child] of prerequisites) {
    map[parent].push(child);
    indegress[child]++;
  }
  for (let i = 0; i < indegress.length; i++) {
    if (indegress[i] === 0) {
      queue.push(i);
    }
  }
  while (queue.length) {
    const cur = queue.shift();
    topOrder.push(cur);
    map[cur].forEach((child) => {
      indegress[child]--;
      if (indegress[child] === 0) {
        queue.push(child);
      }
    });
  }

  if (topOrder.length !== tasks) {
    return [];
  }

  return topOrder;
};

export default findTopOrder;
