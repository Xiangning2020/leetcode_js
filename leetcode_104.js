// # 104. Maximum depth of binary tree;
// 递归，后序遍历：左节点，右节点，根节点。
// 时间复杂度：O(n),就是逐个节点的在看。空间复杂度，要看需要调用递归的次数，最差为O(n),平衡二叉树为O(logn)
var maxDepth = function (root) {
  if (!root) return 0;
  return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
};

// 层序遍历：就是将每一层的元素放在一个数组里面，然后去看他们的子节点，

// 时间复杂度：O(n)因为每一个节点都有遍历，空间复杂度O(n)，最差情况，
var maxDepth = function (root) {
  if (!root) return 0;

  let store = [root];
  let max = 0;

  while (store.length > 0) {
    let n = store.length;

    for (let i = 0; i < n; i++) {
      let curr = store.shift();
      if (curr.left) store.push(curr.left);
      if (curr.right) store.push(curr.right);
    }
    console.log(max);
    max++;
  }

  return max;
};
