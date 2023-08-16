var j: any;
var n: any = "a b c"
// 针对循环输出
for (j in n) {
    console.log(n[j])
}


let list1 = [4, 5, 6];
list1.forEach((val, idx, array) => {
    // val: 当前值
    // idx：当前index
    // array: Array
});


let list2 = [4, 5, 6];
list2.every((val, idx, array) => {
    // val: 当前值
    // idx：当前index
    // array: Array
    return true; // Continues
    // Return false will quit the iteration
});


var num1: number = 5;
var factorial: number = 1;

while (num1 >= 1) {
    factorial = factorial * num1;
    num1--;
}
console.log("5 的阶乘为：" + factorial);


var num2: number = 5;
var i: number;
var factorial = 1;

for (i = num2; i >= 1; i--) {
    factorial *= i;
}
console.log(factorial)