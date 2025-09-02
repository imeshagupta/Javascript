let arr = [10, 33, 5, 67, 2, 56, 3, 8];
let max = arr[0];
for (let i = 1; i < arr.length; i++) {
  if (arr[i] > max) {
    max = arr[i];
  }
}
console.log(max);
