function foundVowels(str) {
  let count = 0;
  const vowels = "aeiouAEIOU";
  let found = new Set();
  for (let ch of str) {
    if (vowels.includes(ch)) {
      found.add(ch.toLowerCase());
      count++;
    }
  }
  if (count == 0) {
    return "No vowels found.";
  }
  return `Number of vowels in ${str} are: ${count}. \nVowels present: ${[
    ...found,
  ].join(", ")}`;
}
console.log(foundVowels("Education"));
