var ladderLength = function (beginWord, endWord, wordList) {
  let wordSet = new Set(wordList);
  if (!wordSet.has(endWord)) return 0;

  let queue = [[beginWord, 1]];

  while (queue.length > 0) {
    let [word, level] = queue.shift();

    if (word === endWord) return level;

    for (let i = 0; i < word.length; i++) {
      for (let c = 97; c <= 122; c++) {
        let newWord =
          word.slice(0, i) + String.fromCharCode(c) + word.slice(i + 1);

        if (wordSet.has(newWord)) {
          queue.push([newWord, level + 1]);
          wordSet.delete(newWord);
        }
      }
    }
  }
  return 0;
};
