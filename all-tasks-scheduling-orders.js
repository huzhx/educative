const printOrders = (tasks, prerequisites) => {
  const indegress = new Array(tasks).fill(0);
  const map = new Array(tasks).fill(0).map((_) => new Array());
  for (let [parent, child] of prerequisites) {
    map[parent].push(child);
    indegress[child]++;
  }
  const topOrder = [];
  const output = [];
  const queue = [];

  for (let i = 0; i < indegress.length; i++) {
    if (indegress[i] === 0) {
      queue.push(i);
    }
  }

  printAllTopOrders(queue, indegress, topOrder);

  return output;

  function printAllTopOrders(queue, indegress, topOrder) {
    if (queue.length > 0) {
      for (let i = 0; i < queue.length; i++) {
        const cur = queue[i];
        topOrder.push(cur);
        const queueForNextCall = [...queue];
        queueForNextCall.splice(queueForNextCall.indexOf(cur), 1);
        for (let child of map[cur]) {
          indegress[child]--;
          if (indegress[child] === 0) {
            queueForNextCall.push(child);
          }
        }
        printAllTopOrders(queueForNextCall, indegress, topOrder);
        topOrder.pop();
        for (let child of map[cur]) {
          indegress[child]++;
        }
      }
    }

    if (topOrder.length === tasks) {
      output.push([...topOrder]);
    }
  }
};
export default printOrders;
