function average(arr) {
  return arr.reduce((a, b) => a + b, 0) / arr.length;
}
console.log(average([1, 2, 3, 4, 5]));
