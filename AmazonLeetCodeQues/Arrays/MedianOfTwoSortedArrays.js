var findMedianSortedArrays = function (nums1, nums2) {
  let m = nums1.length,
    n = nums2.length;
  let total = m + n;
  let mid1 = Math.floor((total - 1) / 2);
  let mid2 = Math.floor(total / 2);

  let i = 0,
    j = 0,
    count = 0;
  let median1 = 0,
    median2 = 0;

  while (count <= mid2) {
    let val;
    if (i < m && (j >= n || nums1[i] <= nums2[j])) {
      val = nums1[i++];
    } else {
      val = nums2[j++];
    }

    if (count === mid1) median1 = val;
    if (count === mid2) median2 = val;

    count++;
  }

  return (median1 + median2) / 2;
};
