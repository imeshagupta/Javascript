var topKFrequent = function (nums, k) {
  let freqMap = new Map();
  for (let num of nums) {
    freqMap.set(num, (freqMap.get(num) || 0) + 1);
  }
  let bucket = Array(nums.length + 1)
    .fill()
    .map(() => []);
  for (let [num, freq] of freqMap.entries()) {
    bucket[freq].push(num);
  }
  let result = [];
  for (let i = bucket.length - 1; i >= 0 && result.length < k; i--) {
    if (bucket[i].length > 0) {
      result.push(...bucket[i]);
    }
  }

  return result.slice(0, k);
};
