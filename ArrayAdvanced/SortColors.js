// 0 for red
// 1 for white
// 2 for blue
//Place all of them in an ascending order and all same colors must be placed in an adjacent manner.

let nums = [2, 0, 2, 1, 1, 0];
let i = (j = 0),
  k = nums.length - 1;
while (i < k) {
  if (nums[i] === 0) {
    swap(nums, i, j);
    i++;
    j++;
  } else if (nums[i] === 2) {
    swap(nums, i, k);
    k--;
  } else {
    i++;
  }
}
function swap(nums, a, b) {
  let temp = nums[a];
  nums[a] = nums[b];
  nums[b] = temp;
}
console.log(nums);
