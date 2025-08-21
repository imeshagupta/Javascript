function mergeSort(arr1, arr2) {
  return [...arr1, ...arr2].sort((a, b) => a - b);
}
console.log(mergeSort([3, 1, 4], [2, 5])); // [1,2,3,4,5]
