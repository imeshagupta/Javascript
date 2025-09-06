var moveZeroes = function (nums) {
  let i = (j = 0);
  while (i < nums.length) {
    if (nums[i] !== 0) {
      let temp = nums[i];
      nums[i] = nums[j];
      nums[j] = temp;
      j++;
    }
    i++;
  }
};
console.log(moveZeroes([0, 1, 0, 3, 2]));
