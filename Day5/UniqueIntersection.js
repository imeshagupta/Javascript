function uniqueIntersection(arr1, arr2) {
  return [...new Set(arr1.filter((x) => arr2.includes(x)))];
}
console.log(uniqueIntersection([1, 2, 2, 3], [2, 3, 3, 4])); // [2,3]
