// #429. N-ary tree level order traversal
// 和二叉树遍历不同的地方在于，这个地方是要val，而不是节点。所以需要开一个新的array去存储val.

// 时间复杂度：O(n)，同样也是遍历了所有的节点，去看自己的子节点，实际上是遍历了两次，一个是作为父节点，一次是作为子节点。
// 空间复杂度:O(n)，最后返回的数组怎么都是要有所有节点的，只是按着层数不同进行分类了。
var levelOrder = function (root) {
  if (!root) return [];

  let levels = [];
  let stack = [root]; // stack 还是用来存储节点。
  levels.push([root.val]);

  while (stack.length) {
    let n = stack.length;
    let level = [];
    // 注意循环的次数。以及while到 n = 0,就不再进入循环，和for不同。所以要注意是循环n次。
    // while (n--) // 从n开始到1；for循环 从零开始到n-1。
    for (let i = 0; i < n; i++) {
      let curr = stack.shift();
      for (child of curr.children) {
        stack.push(child);
        level.push(child.val);
      }
    }
    if (level.length) levels.push(level); // 要注意会有空数组，也就是最后都没有children节点的时候。
  }
  return levels;
};
