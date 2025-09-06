var canFinish = function (numCourses, prerequisites) {
  const graph = Array.from({ length: numCourses }, () => []);
  for (let [a, b] of prerequisites) {
    graph[b].push(a);
  }

  const state = new Array(numCourses).fill(0);

  const dfs = (course) => {
    if (state[course] === 1) return false;
    if (state[course] === 2) return true;

    state[course] = 1;
    for (let next of graph[course]) {
      if (!dfs(next)) return false;
    }
    state[course] = 2;
    return true;
  };

  for (let i = 0; i < numCourses; i++) {
    if (state[i] === 0 && !dfs(i)) return false;
  }

  return true;
};
