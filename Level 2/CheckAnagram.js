function isAnagram(str1, str2) {
  return str1.split("").sort().join("") === str2.split("").sort().join("");
}
console.log(isAnagram("listen", "silent"));

//Alternate solution
/*
function isAnagram(str1, str2) {
  if (str1.length !== str2.length) return false;
  let count = {};

  for (let c of str1) count[c] = (count[c] || 0) + 1;
  for (let c of str2) {
    if (!count[c]) return false;
    count[c]--;
  }
  return true;
}

*/
