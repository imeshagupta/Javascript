function sumEven(arr) {
  return arr.filter((x) => x % 2 === 0).reduce((a, b) => a + b, 0);
}

console.log(sumEven([1, 2, 3, 4, 5, 6]));
