var findKthLargest = function (nums, k) {
  let left = 0,
    right = nums.length - 1;
  const target = k - 1;

  while (left <= right) {
    const pivotIdx = left + Math.floor(Math.random() * (right - left + 1));
    const pivot = nums[pivotIdx];

    let lt = left,
      i = left,
      gt = right;
    while (i <= gt) {
      if (nums[i] > pivot) {
        [nums[i], nums[lt]] = [nums[lt], nums[i]];
        i++;
        lt++;
      } else if (nums[i] < pivot) {
        [nums[i], nums[gt]] = [nums[gt], nums[i]];
        gt--;
      } else {
        i++;
      }
    }

    if (target < lt) {
      right = lt - 1;
    } else if (target <= gt) {
      return nums[lt];
    } else {
      left = gt + 1;
    }
  }
};
