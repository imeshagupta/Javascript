var mergeTwoLists = function (list1, list2) {
  let prehead = new ListNode(-1);
  let tail = prehead;

  while (list1 !== null && list2 !== null) {
    if (list1.val <= list2.val) {
      tail.next = list1;
      list1 = list1.next;
    } else {
      tail.next = list2;
      list2 = list2.next;
    }
    tail = tail.next;
  }

  tail.next = list1 !== null ? list1 : list2;

  return prehead.next;
};
