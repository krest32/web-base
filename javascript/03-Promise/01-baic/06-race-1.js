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

// race 的用法与 all 一样，只不过 all 是等所有异步操作都执行完毕后才执行 then 回调。
// 而 race 的话只要有一个异步操作执行完毕，就立刻执行 then 回调。
// 注意：其它没有执行完毕的异步操作仍然会继续执行，而不是停止。
Promise.race([cutUp(), boil()]).then(function (results) {
    console.log("哈哈，我先买好啦");
    console.log(results);
});

