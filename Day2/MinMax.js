function minMax(arr) {
  let min = arr[0],
    max = arr[0];
  for (let num of arr) {
    if (num < min) min = num;
    if (num > max) max = num;
  }
  return { min, max };
}

console.log(minMax([3, 5, 1, 8])); // {min:1, max:8}
