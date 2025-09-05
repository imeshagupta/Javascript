var strStr = function (haystack, needle) {
  let n = haystack.length,
    m = needle.length;

  for (let i = 0; i <= n - m; i++) {
    if (haystack.substring(i, i + m) === needle) {
      return i;
    }
  }
  return -1;
};
console.log(strStr("sadbutsad", "sad"));
