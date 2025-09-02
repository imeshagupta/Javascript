let arr = [10, 33, 5, 67, 2, 56, 3, 8];
let min = Math.min(arr[0], arr[1]);
let secondMin = Math.min(arr[0], arr[1]);

for (let i = 2; i < arr.length; i++) {
  if (arr[i] > min) {
    secondMin = min;
    min = arr[i];
  } else if (arr[i] > secondMin && min !== arr[i]) {
    secondMin = arr[i];
  }
}

console.log(secondMin);
