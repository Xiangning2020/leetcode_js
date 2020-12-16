// #1.两数之和
// 哈希解法：
// 思路：建立map，遍历数组。判断map中是否有元素能够与之相加之和为target;如果没有，就在map中加入“自己：指标”这个key-value pair;

// 和暴力解法的思路是一致的，在使用Map的这种解法里：每一个数都在和自己之前的数进行判断是不是能够加和为target;
// 而暴力解法也是希望能够遍历所有相加的组合，从前面开始每个都和自己后面的数字进行相加。
// 时间复杂度：O(n),空间复杂度O(n)
let twoSum = function (nums, target) {
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    let complement = target - nums[i];
    if (map.has(complement)) {
      return [i, map.get(complement)];
    } else {
      map.set(nums[i], i);
    }
  }
  return [];
};
