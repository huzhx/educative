const topologicalSortByDFS = (vertices, edges) => {
  const visited = new Array(vertices).fill(0);
  const adjMap = new Map();
  const topOrder = [];

  for (let [child, parent] of edges) {
    const parents = adjMap.get(child) || [];
    parents.push(parent);
    adjMap.set(child, parents);
  }

  for (let i = 0; i < visited.length; i++) {
    if (visited[i] === 0) {
      dfs(i);
    }
  }

  return topOrder.reverse();

  function dfs(node) {
    visited[node] = 1;
    const parents = adjMap.get(node) || [];
    for (let parent of parents) {
      if (visited[parent] === 0) {
        dfs(parent);
      }
    }
    topOrder.push(node);
  }
};

export { topologicalSortByDFS };
