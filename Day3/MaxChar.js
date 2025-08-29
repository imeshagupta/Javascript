function maxChar(str) {
  let map = {};
  let max = 0,
    char = "";
  for (let s of str) {
    map[s] = (map[s] || 0) + 1;
    if (map[s] > max) {
      max = map[s];
      char = s;
    }
  }
  return { character: char, count: max };
}
console.log(maxChar("apple"));
