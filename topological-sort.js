const topologicalSortByDFS = (vertices, edges) => {
  const visited = new Array(vertices).fill(0);
  const adjMap = new Map();
  const topOrder = [];

  for (let [parent, child] of edges) {
    const children = adjMap.get(parent) || [];
    children.push(child);
    adjMap.set(parent, children);
  }

  for (let i = 0; i < visited.length; i++) {
    if (visited[i] === 0) {
      dfs(i, new Set([i]));
    }
  }

  if (topOrder.length !== vertices) return [];

  return topOrder.reverse();

  function dfs(node, visiting) {
    visited[node] = 1;
    const children = adjMap.get(node) || [];
    for (let child of children) {
      // * detect cycle
      if (visiting.has(child)) {
        return;
      }
      if (visited[child] === 0) {
        visiting.add(child);
        dfs(child, visiting);
        visiting.delete(child);
      }
    }
    topOrder.push(node);
  }
};

const topologicalSortByBFS = (vertices, edges) => {
  const adjMap = new Map();
  const indegrees = new Array(vertices).fill(0);
  const topOrder = [];
  const queue = [];

  for (let [parent, child] of edges) {
    const children = adjMap.get(parent) || [];
    children.push(child);
    adjMap.set(parent, children);
    indegrees[child]++;
  }

  for (let i = 0; i < indegrees.length; i++) {
    if (indegrees[i] === 0) {
      queue.push(i);
    }
  }

  while (queue.length) {
    const cur = queue.shift();
    topOrder.push(cur);
    const children = adjMap.get(cur) || [];
    children.forEach((child) => {
      indegrees[child]--;
      if (indegrees[child] === 0) {
        queue.push(child);
      }
    });
  }

  if (topOrder.length !== vertices) return [];

  return topOrder;
};

export { topologicalSortByDFS, topologicalSortByBFS };
