function longestWord(str) {
  let words = str.split(" ");
  return words.reduce((a, b) => (a.length > b.length ? a : b));
}
console.log(longestWord("I love programming in JavaScript"));
