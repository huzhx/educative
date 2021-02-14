const canSchedule = (tasks, prerequisites) => {
  const indegress = new Array(tasks).fill(0);
  const hashmap = new Map();
  const queue = [];
  const topOrder = [];

  for (let [parent, child] of prerequisites) {
    const children = hashmap.get(parent) || [];
    children.push(child);
    hashmap.set(parent, children);
    indegress[child]++;
  }

  for (let i = 0; i < indegress.length; i++) {
    if (indegress[i] === 0) queue.push(i);
  }

  while (queue.length) {
    const cur = queue.shift();
    topOrder.push(cur);
    const children = hashmap.get(cur) || [];
    for (let child of children) {
      indegress[child]--;
      if (indegress[child] === 0) {
        queue.push(child);
      }
    }
  }

  return topOrder.length === tasks;
};

export default canSchedule;
