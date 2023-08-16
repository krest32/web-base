var j;
var n = "a b c";
// 针对循环输出
for (j in n) {
    console.log(n[j]);
}
var list1 = [4, 5, 6];
list1.forEach(function (val, idx, array) {
    // val: 当前值
    // idx：当前index
    // array: Array
});
var list2 = [4, 5, 6];
list2.every(function (val, idx, array) {
    // val: 当前值
    // idx：当前index
    // array: Array
    return true; // Continues
    // Return false will quit the iteration
});
var num1 = 5;
var factorial = 1;
while (num1 >= 1) {
    factorial = factorial * num1;
    num1--;
}
console.log("5 的阶乘为：" + factorial);
var num2 = 5;
var i;
var factorial = 1;
for (i = num2; i >= 1; i--) {
    factorial *= i;
}
console.log(factorial);
