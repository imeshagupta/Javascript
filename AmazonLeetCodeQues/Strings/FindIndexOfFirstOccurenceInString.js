var strStr = function (haystack, needle) {
  let n = haystack.length;
  let m = needle.length;

  if (m === 0) return 0;
  for (let i = 0; i <= n - m; i++) {
    let j = 0;
    while (j < m && haystack[i + j] === needle[j]) {
      j++;
    }
    if (j === m) return i;
  }

  return -1;
};
//Dry run
//haystack = "hello", needle = "ll"
// n = 5, m = 2

// i = 0 → haystack[0] !== needle[0] → continue
// i = 1 → haystack[1] !== needle[0] → continue
// i = 2 → haystack[2] === needle[0], haystack[3] === needle[1] → match! return 2

//------------------

//Alternate solution

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
