// #902. 数组排序：
// 几种经典的排序方式：
// 1. 冒泡排序：
// 从头开始进行两两比较交换，
// 每次交换，都会把当前数组最大的数字放在最后一位，
// 之后再考虑除去最后一位的数组，将该数组视为当前数组，循环上述步骤，直至当前数组长度为零。

// 时间复杂度O(n^2)， 空间复杂度O(1);
// 稳定排序。相邻元素交换。

var bubbleSort = function (arr) {
  if (arr.length < 2) return arr;

  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
};

// 2. 选择排序：
// 顾名思义，选择排序，遍历数组，每次都选出最小值，然后将它放在最前面。
// 之后在剩下的数组中重复上述操作。

// 时间复杂度O(n^2)， 空间复杂度O(1);
// 不稳定，如[5(1)，8，5(2)，2，9]。第一个5会和2交换
// [5(1), 8, 5(2), 2, 9];
// [2, 8, 5(2), 5(1), 9];
// [2, 5(2), 5(1), 8, 9];
var selectionSort = function (arr) {
  if (arr.length < 2) return arr;

  for (let i = 0; i < arr.length - 1; i++) {
    // i 是进行到倒数第二个元素。
    let minIndex = i;
    let min = arr[i];
    for (let j = i + 1; j < arr.length; j++) {
      // 注意这个j的范围，j = i+1,也就是数组最后一个值也要参与比较。
      if (arr[j] < min) {
        min = arr[j];
        minIndex = j;
      }
    }
    [arr[minIndex], arr[i]] = [arr[i], arr[minIndex]];
  }
  return arr;
};

// 3.插入排序：
// 从当前元素开始，和它前面所有的元素进行大小的比较，找到自己的位置；
// 然后再看下一个元素，重复上述操作。

// 时间复杂度O(n^2)， 空间复杂度O(1);
// 稳定排序。

var insertionSort = function (arr) {
  if (arr.length < 2) return arr;

  for (let i = 1; i < arr.length; i++) {
    // 最后一个数字需要比较，但是第一个数字比较的对象。
    for (let j = i - 1; j >= 0; j--) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
};

// 4.快速排序：
// 找到一个pivot值，将小于它的放在左边，大于他的放在右边。
// 左右两边的数组按着同样的逻辑进行递归排序。
// 常见解法是：有pivot值，同时有left,right 指针，然后通过比较和pivot的大小，进行移动和交换。
// 或者开新数组，存储大小数组。

// 时间复杂度O(nlogn)，空间复杂度O(logn)递归造成的对栈的调用，可能会有不同结果,因为可能会新开数组。
// 不稳定。
var quickSort = function (arr, left, right) {
  if (left >= right || arr.length < 2) return; // 如果left >= right, 则是只有一个元素的数组。
  // if (arr.length < 2) return arr;

  let i = left,
    j = right,
    base = arr[left];
  while (i < j) {
    while (arr[j] >= base && i < j) j--;
    while (arr[i] <= base && i < j) i++;

    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  [arr[j], arr[left]] = [arr[left], arr[j]]; // 要写上数组，不能用base直接代替arr[left]

  quickSort(arr, left, j - 1);
  quickSort(arr, j + 1, right);
};

var Sort = function (arr) {
  quickSort(arr, 0, arr.length - 1);
  return arr;
};

// 还可以直接开数组存储左右的子数组，之后再对左右数组进行排序。此时空间复杂度：O(nlogn)
var quickSort2 = function (arr) {
  if (arr.length < 2) return arr;
  let base = arr[0];
  let left = [];
  let right = [];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < base) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return quickSort2(left).concat(base, quickSort2(right));
};

// 5. 归并排序；
// divide,将数组分成两部分。分成的左右两部分再次进行分割，逐级向下，直到只有单个元素的数组为止。
// 对于分到的单个数组再次进行排序，合并，再对得到的有序数组进行合并，逐级向上。

// 时间复杂度O（nlogn),空间复杂度O（nlogn）
// 稳定。

var mergeSort = function (arr) {
  if (arr.length < 2) return arr;

  let mid = Math.floor(arr.length / 2);
  let left = arr.slice(0, mid);
  let right = arr.slice(mid);

  return merge(mergeSort(left), mergeSort(right));
};

var merge = function (arr1, arr2) {
  let result = []; // 新开了空间。

  while (arr1.length && arr2.length) {
    if (arr1[0] < arr2[0]) {
      result.push(arr1.shift());
    } else {
      result.push(arr2.shift());
    }
  }
  while (arr1.length) {
    result.push(arr1.shift());
  }

  while (arr2.length) {
    result.push(arr2.shift());
  }
  return result;
};

// #215. kth largest element in an array:
// 就是选择排序，选择最大的,排在前面。第k大，则排k个最大的即可。然后返回那个数。
// 时间复杂度仍然是O(n),空间复杂度O(1).

var findKthLargest = function (nums, k) {
  for (let i = 0; i < k; i++) {
    let max = nums[i];
    let maxIndex = i;
    for (let j = i + 1; j < nums.length; j++)
      if (nums[j] > max) {
        max = nums[j];
        maxIndex = j;
      }
    [nums[i], nums[maxIndex]] = [nums[maxIndex], nums[i]];
  }
  console.log(nums);
  return nums[k - 1];
};
