//Bitwise AND jab dono 1 ho tbhi result 1 hoga otherwise 0

var longestSubarray = function (nums) {
  let maxVal = nums[0];
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > maxVal) maxVal = nums[i];
  }

  let maxLen = 0,
    currLen = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === maxVal) {
      currLen++;
      if (currLen > maxLen) maxLen = currLen;
    } else {
      currLen = 0;
    }
  }

  return maxLen;
};
