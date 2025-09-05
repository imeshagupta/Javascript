let arr = [1, 2, 3, 4, 5];
let prompt = require("prompt-sync")();
let k = Number(prompt("Enter a number "));
let new_k = k % arr.length;

let count = 0;

for (let i = 1; i <= new_k; i++) {
  let copy = arr[arr.length - 1];
  count++;
  for (let j = arr.length - 1; j >= 0; j--) {
    arr[j] = arr[j - 1];
  }
  arr[0] = copy;
}
console.log(arr);
console.log(count);

//Method 2 (efficient)
// Time complexity O(n)
let arr2 = [1, 2, 3, 4, 5];
let temp = new Array(arr2.length);
let counts = 0;
for (let i = 0; i < arr2.length; i++) {
  temp[(i + k) % arr2.length] = arr2[i];
  counts++;
}
console.log(temp);
console.log(counts);

//Method 3
//Most efficient method
let arr3 = [1, 2, 3, 4, 5];
k = k % arr3.length;
reverse(0, arr3.length - 1);
reverse(0, k - 1);
reverse(k, arr3.length - 1);

function reverse(i, j) {
  while (i < j) {
    let temp = arr3[i];
    arr3[i] = arr3[j];
    arr3[j] = temp;
    i++;
    j--;
  }
}
console.log(arr3);
