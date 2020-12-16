// #2 两数相加：add two numbers

// 给出两个链表，但是长度不一定是相等的。倒序排列代表的数字；
// 思路：
// 1. 先给出一个哑节点，用来后面返回结果dummy.next;
// 2. 遍历两个链表，直到两者都是null;
// 3. 用一个变量记载是不是需要进行进位；
// 4. 注意最后，carry如何等于1，那么还有一位。

var addTwoNumbers = function (l1, l2) {
  let dummy = new ListNode();
  let curr = dummy;
  let carry = 0;

  while (l1 !== null || l2 !== null) {
    let sum = 0;
    if (l1 !== null) {
      sum += l1.val;
      l1 = l1.next;
    }
    if (l2 !== null) {
      sum += l2.val;
      l2 = l2.next;
    }

    sum += carry;
    curr.next = new ListNode(sum % 10);
    carry = Math.floor(sum / 10);
    curr = curr.next;
  }

  if (carry == 1) {
    curr.next = new ListNode(1);
  }
  return dummy.next;
};
