let arr1 = [2, 5, 6];
let arr2 = [1, 3, 4, 8];

let merge = new Array(arr1.length + arr2.length);

let i = (j = k = 0);
while (i < arr1.length && j < arr2.length) {
  if (arr1[i] < arr2[j]) {
    merge[k] = arr1[i];
    i++;
    k++;

    //OR
    //merge[k++] = arr1[i++]
  } else {
    merge[k] = arr2[j];
    k++;
    j++;
  }
}
while (j < arr2.length) {
  merge[k] = arr2[j];
  k++;
  j++;
}
while (i < arr1.length) {
  merge[k] = arr1[i];
  k++;
  i++;
}
console.log(merge);
