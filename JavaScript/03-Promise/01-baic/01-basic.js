// resolve函数的作用：在异步操作成功时调用，并将异步操作的结果，作为参数传递出去；
// reject函数的作用：在异步操作失败时调用，并将异步操作报出的错误，作为参数传递出去。

//买笔
function buy() {
    console.log("开始买笔");
    const p = new Promise(function (resolve, reject) {
        // 等待 1s 执行
        setTimeout(function () {
            console.log("买了笔芯");
            // 结果作为参数传递出去
            resolve("数学作业");
        }, 1000);
    });
    return p;
}

//写作业
function work(data) {
    console.log("开始写作业：" + data);
    const p = new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log("写完作业");
            resolve("作业本");
        }, 1000);
    });
    return p;
}

function out(data) {
    console.log("开始上交：" + data);
    const p = new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log("上交完毕");
            resolve("得分：A");
        }, 1000);
    });
    return p;
}


//推荐这种简化的写法
buy().then(work).then(out).then(
    function (data) {
        console.log(data);
    }
);


// 不建议使用这种方式
// buy().then(function(data){
//     return work(data);
// }).then(function(data){
//     return out(data);
// }).then(function(data){
//     console.log(data);
// });

