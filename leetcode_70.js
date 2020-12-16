// #70 爬楼梯问题：动态规划。
// f(n) = f(n - 1) + f(n - 2);
// 可以通过数组的方式进行实现。
// 时间复杂度：O(n), 空间复杂度：O(n)

var climbStairs1 = function(n) {
    if (n == 1) return 1;
    if (n == 2) return 2;

    let count = [];
    count[1] = 1;
    count[2] = 2;
    for (let i = 3; i <= n; i++) {
        count[i] = count[i - 1] + count[i - 2];
    }
    return count[n];
};

console.log(climbStairs1(5));

// 空间复杂度实际上只和两个数字有关，可以降低到常量级O(1)

var climbStairs = function(n) {
    if (n == 1) return 1;
    if (n == 2) return 2;

    let a = 1;
    let b = 2;
    let c;
    for (let i = 3; i <= n; i++) {
        c = a + b;
        [a, b] = [b, c]; // 利用ES6新特性，解构赋值
        // a = b;
        // b = c;
    }
    return c;
};

console.log(climbStairs(5));