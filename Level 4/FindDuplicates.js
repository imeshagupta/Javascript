function findDuplicates(arr) {
  let seen = new Set();
  let dup = new Set();
  for (let num of arr) {
    if (seen.has(num)) dup.add(num);
    seen.add(num);
  }
  return [...dup];
}
