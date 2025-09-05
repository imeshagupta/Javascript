//Subarray = continuous block of the array.

//Subsequence = can skip elements, but order matters.

//JavaScript me sbse chote number ki value -Infinity aur sabse number ki value +Infinity hoti hai

let nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
let sum = 0;
let max = -Infinity;
for (let i = 0; i < nums.length; i++) {
  sum += nums[i];
  max = Math.max(sum, max);

  if (sum < 0) {
    sum = 0;
  }
}
console.log(max);
