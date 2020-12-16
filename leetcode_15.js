// #15. 3Sum

// 首先和two sum 无关。是另一种方法：双指针：判断三个数相加是不是0。
// 思路：
// 1. 首先进行排序（去重:如[-1,0,-1,1], 可以是0，1，3/1，2，3，到底是哪个-1导致的呢？
// 所以进行排序之后，相同值得到的结果就可以避免重复）
// 2. 对数组进行遍历，同时加入双指针，要注意，在首次以及遍历值和之前遍历值不同的情况下,才能够进入指针遍历操作；（为了去重））
// 3. 双指针使用while遍历所有情况，和为零，两个指针都进行移动：在其中要考虑去重和防止越界的问题；


var threeSum = function(nums) {
    let start, end;
    let result = [];
    nums.sort((a, b) => a - b);

    for (let i = 0; i < nums.length - 2; i++) {
        if (i == 0 || nums[i] !== nums[i - 1]) {
            start = i + 1;
            end = nums.length - 1;
            while (start < end) {
                if (nums[i] + nums[start] + nums[end] == 0) {
                    result.push([nums[i], nums[start], nums[end]]);
                    // 之后进行指针移动：
                    start++;
                    end--;
                    // 去重：
                    while (start < end && nums[start] == nums[start - 1]) {
                        start++;
                    }
                    while (start < end && nums[end] == nums[end + 1]) {
                        end--;
                    }
                } else if (nums[i] + nums[start] + nums[end] < 0) {
                    start++;
                } else {
                    end--;
                }
            }
        }
    }
    return result;
}

// console.log(threeSum([-1, -1, -1, -4, 0, -3, 3, 2]));