function smallest(arr) {
  let min = arr[0];
  for (let x of arr) if (x < min) min = x;
  return min;
}
