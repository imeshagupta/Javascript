// move all the negatives to left
// move all the positives to right
let arr = [-1, -4, 0, 7, 3, -3, 8, 9, -2, -10, -22, 33];
let i = 0;
let j = arr.length - 1;
while (i <= j) {
  if (arr[i] < 0) {
    i++;
  } else if (arr[j] > 0) {
    j--;
  } else {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    i++;
    j--;
  }
}
console.log(arr);
