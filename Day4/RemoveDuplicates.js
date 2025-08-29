function removeDuplicates(arr) {
  return [...new Set(arr)];
}
console.log(removeDuplicates([1, 2, 3, 3, 1, 2, 2, 3, 4, 4, 5]));

//Alternate solution
function removeDuplicates2(arr) {
  let seen = {};
  let result = [];

  for (let num of arr) {
    if (!seen[num]) {
      seen[num] = true;
      result.push(num);
    }
  }

  return result;
}

console.log(removeDuplicates2([1, 2, 3, 3, 1, 2, 2, 3, 4, 4, 5]));
