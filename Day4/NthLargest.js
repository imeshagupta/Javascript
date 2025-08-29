function nthLargest(arr, n) {
  let sorted = [...new Set(arr)].sort((a, b) => b - a);
  return sorted[n - 1];
}
console.log(nthLargest([3, 5, 2, 6, 6, 1], 2)); // 5
