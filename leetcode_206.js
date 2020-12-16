// #206 反转链表
// 就是对于curr node, prev node, next node, 进行位置的交换：
// 空间复杂度：O(1),时间复杂度：O(n)

var reverseList = function (head) {
  let prev = null;
  let curr = head;
  let next = null;

  while (curr !== null) {
    next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }

  return prev;
};

// 由于考虑到是在使用交换，采用解构赋值：
var reverseList = function (head) {
  let prev = null;
  let curr = head;
  while (curr !== null) {
    [curr.next, prev, curr] = [prev, curr, curr.next];
  }
  return prev;
};
