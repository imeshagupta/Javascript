let arr = [10, 33, 5, 67, 2, 56, 3, 8, 44];

//first method
let temp = new Array(arr.length);
let j = 0;
for (let i = arr.length - 1; i >= 0; i--) {
  temp[j] = arr[i];
  j++;
}
console.log(temp);

//Second method
let newArr = [];
for (let i = arr.length - 1; i >= 0; i--) {
  newArr.push(arr[i]);
}
console.log(newArr);

//third method (most efficient)
let m = 0,
  n = arr.length - 1;
while (m < n) {
  let temp = arr[m];
  arr[m] = arr[n];
  arr[n] = temp;
  m++;
  n--;
}
console.log(arr);
