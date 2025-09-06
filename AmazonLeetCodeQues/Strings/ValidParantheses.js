var isValid = function (s) {
  let stack = [];
  let top = -1;

  for (let i = 0; i < s.length; i++) {
    let char = s[i];

    if (char === "(" || char === "{" || char === "[") {
      top++;
      stack[top] = char;
    } else {
      if (top === -1) return false;

      let open = stack[top];
      top--;

      if (
        (char === ")" && open !== "(") ||
        (char === "}" && open !== "{") ||
        (char === "]" && open !== "[")
      ) {
        return false;
      }
    }
  }

  return top === -1;
};
