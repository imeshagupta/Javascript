let arr = [10, 33, 5, 67, 2, 56, 3, 8];
let max = Math.max(arr[0], arr[1]);
let secondMax = Math.min(arr[0], arr[1]);

for (let i = 2; i < arr.length; i++) {
  if (arr[i] > max) {
    secondMax = max;
    max = arr[i];
  } else if (arr[i] > secondMax && max !== arr[i]) {
    secondMax = arr[i];
  }
}

console.log(secondMax);
