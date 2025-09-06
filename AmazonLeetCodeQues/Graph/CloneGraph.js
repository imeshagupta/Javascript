var cloneGraph = function (node) {
  if (!node) return null;

  const visited = new Map();

  function dfs(curr) {
    if (visited.has(curr)) return visited.get(curr);

    const clone = new _Node(curr.val);
    visited.set(curr, clone);

    for (let neighbor of curr.neighbors) {
      clone.neighbors.push(dfs(neighbor));
    }

    return clone;
  }

  return dfs(node);
};
