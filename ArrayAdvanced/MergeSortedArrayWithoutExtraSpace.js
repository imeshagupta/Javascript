let nums1 = [1, 2, 3, 0, 0, 0];
let nums2 = [2, 5, 6];
let i = 2;
let j = nums2.length - 1;
let k = nums1.length - 1;
while (i >= 0 && j >= 0) {
  if (nums1[i] > nums2[j]) {
    nums1[k] = nums1[i];
    i--;
    k--;
  } else {
    nums1[k] = nums2[j];
    j--;
    k--;
  }
}
while (j >= 0) {
  nums1[k] = nums2[j];
  j--;
  k--;
}

console.log(nums1);
