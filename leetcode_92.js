// #92 反转链表II
// 和I 不同的是，给出了链表反转的始末值m, n；
// 因此只需要在需要的那一部分进行反转，之后进行拼接。

// 需要注意的几个点：
// 1. 对于起始点的两个节点的标识；
// 2. 循环次数，对应的最后的prev, curr的指向；
//   注意，每次循环结束，prev和curr之间没有箭头进行链接：
// 3. 最后直接返回head，那么如果链表从头开始反转，将循环最后的prev赋给head;
// 时间复杂度:O(n),空间复杂度O(1)

var reverseBetween = function (head, m, n) {
  let position = 1;
  let prev = null;
  let curr = head;
  let next = null;

  while (position < m) {
    position++;
    prev = curr;
    curr = curr.next;
  }

  let first = prev;
  let start = curr;

  while (position < n + 1) {
    position++;
    next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }

  if (first == null) {
    head = prev;
  } else {
    first.next = prev;
  }
  start.next = curr;

  return head;
};

// 同样可以通过解构赋值的方式进行：
var reverseBetween = function (head, m, n) {
  let position = 1;
  let prev = null;
  let curr = head;

  while (position < m) {
    position++;
    [prev, curr] = [curr, curr.next];
  }

  let first = prev;
  let start = curr;

  while (position < n + 1) {
    position++;
    [curr.next, curr, prev] = [prev, curr.next, curr];
  }

  if (first == null) {
    head = prev;
  } else {
    first.next = prev;
  }
  start.next = curr;

  return head;
};
