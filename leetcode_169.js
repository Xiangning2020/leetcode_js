// 169. 多数元素
// 哈希表：就是通过map去记录每个值出现的次数。
// 时间复杂度：O(n),空间复杂度：0(n)。
var majorityElement = function (nums) {
  let map = new Map();
  let max = 0;
  let result = nums[0];
  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) {
      map.set(nums[i], map.get(nums[i]) + 1);
      if (map.get(nums[i]) > max) {
        max = map.get(nums[i]);
        result = nums[i];
      }
    } else {
      map.set(nums[i], 0);
    }
  }
  return result;
};

// 排序，然后找中间位置那个元素。
// 时间复杂度：O(nlogn),空间复杂度：O(logn);
var majorityElement = function (nums) {
  nums.sort();
  console.log(nums);
  return nums[Math.floor(nums.length / 2)];
};

// 摩尔投票：
// count表示从任意一个数开始进行计数，相同进行+1，否则进行-1，如果count==0, 那么就换成下一个值。
// value是和真实的大多数值进行绑定的，从头开始进行计数。如果相同进行+1，否则进行-1。而且和count是相反数。
// 之所以是相反数，如果一开始选定的candidate,和真实的majority 是一个数，那么count和value的变化趋势是一样的。
// 当计数等于零时，如果candidate 和majority不同，那么count和value的变化趋势完全相反。但是由于majority数量占多数，
// 所以最终两者相同。而且candidate代表的就是majority。
//
// 时间复杂度：O(n),空间复杂度：O(1).
var majorityElement = function (nums) {
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    if (count == 0) candi = nums[i];
    if (nums[i] == candi) {
      count++;
    } else {
      count--;
    }
  }
  return candi;
};
