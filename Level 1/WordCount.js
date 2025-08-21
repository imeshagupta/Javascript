function wordCount(str) {
  return str.trim().split(/\s+/).length;
}
console.log(wordCount("Hello   world   JavaScript")); // 3
