var lengthOfLongestSubstring = function (s) {
  let maxLen = 0;
  let left = 0;

  for (let right = 0; right < s.length; right++) {
    for (let k = left; k < right; k++) {
      if (s[k] === s[right]) {
        left = k + 1;
        break;
      }
    }

    let currentLen = right - left + 1;
    if (currentLen > maxLen) maxLen = currentLen;
  }

  return maxLen;
};
