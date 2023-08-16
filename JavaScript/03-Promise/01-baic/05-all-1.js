//买作业本
function cutUp() {
    console.log('挑作业本');
    var p = new Promise(function (resolve, reject) { //做一些异步操作
        setTimeout(function () {
            console.log('挑好购买作业本');
            resolve('新的作业本');
        }, 1000);
    });
    return p;
}

//买笔
function boil() {
    console.log('挑笔芯');
    var p = new Promise(function (resolve, reject) { //做一些异步操作
        setTimeout(function () {
            console.log('挑好购买笔芯');
            resolve('新的笔芯');
        }, 1000);
    });
    return p;
}

// promise 的 all 方法提供了并行执行异步操作的能力，并且在所有异步操作执行完后才执行回调。
Promise.all([cutUp(), boil()]).then(function (results) {
    console.log("写作业的工具都买好了");
    console.log(results);
});

