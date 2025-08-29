function duplicateChars(str) {
  let map = {},
    dup = [];
  for (let ch of str) map[ch] = (map[ch] || 0) + 1;

  for (let key in map) if (map[key] > 1) dup.push(key);
  return dup;
}
