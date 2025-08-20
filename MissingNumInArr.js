function missingNumber(arr, n) {
  let expectedSum = (n * (n + 1)) / 2;
  let actualSum = arr.reduce((a, b) => a + b, 0);
  return expectedSum - actualSum;
}
console.log(missingNumber([1, 2, 4, 5], 5));
