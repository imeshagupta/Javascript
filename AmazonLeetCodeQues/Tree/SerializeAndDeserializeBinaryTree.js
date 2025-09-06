var serialize = function (root) {
  function dfs(node) {
    if (!node) return ["null"];
    return [String(node.val), ...dfs(node.left), ...dfs(node.right)];
  }
  return dfs(root).join(",");
};

var deserialize = function (data) {
  let nodes = data.split(",");
  let index = 0;

  function build() {
    if (nodes[index] === "null") {
      index++;
      return null;
    }
    let node = new TreeNode(Number(nodes[index]));
    index++;
    node.left = build();
    node.right = build();
    return node;
  }

  return build();
};
