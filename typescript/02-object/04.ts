// 剩余参数
function addNumbers(...nums: number[]) {
    var i;
    var sum: number = 0;

    for (i = 0; i < nums.length; i++) {
        sum = sum + nums[i];
    }
    console.log("和为：", sum)
}

addNumbers(1, 2, 3)
addNumbers(10, 10, 10, 10, 10)