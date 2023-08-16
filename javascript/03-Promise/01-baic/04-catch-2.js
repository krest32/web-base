function buy() {
    console.log("开始买笔");
    var p = new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log("买了笔芯");
            resolve("数学作业");
        }, 1000);
    });
    return p;
}

function work(data) {
    console.log("开始写作业：" + data);
    var p = new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log("写完作业");
            resolve("作业本");
        }, 1000);
    });
    return p;
}

// 当执行 resolve 的回调（也就是上面 then 中的第一个参数）时，
// 如果抛出异常了（代码出错了），那么也不会报错卡死 js，而是会进到这个 catch 方法中
buy()
    .then(
        function (data) {
            throw new Error("买了坏的笔芯");
            work(data);
        })
    .catch(
        function (data) {
            console.log(data);
        });


