function requestImg() {
    var p = new Promise(function (resolve, reject) {
        var img = new Image();
        img.onload = function () {
            resolve(img);
        }
        img.src = 'xxxxxx';
    });
    return p;
}

//延时函数，用于给请求计时
function timeout() {
    var p = new Promise(function (resolve, reject) {
        setTimeout(function () {
            reject('图片请求超时');
        }, 5000);
    });
    return p;
}


//上面代码 requestImg 函数异步请求一张图片，timeout 函数是一个延时 5 秒的异步操作。我们将它们一起放在 race 中赛跑。
//如果 5 秒内图片请求成功那么便进入 then 方法，执行正常的流程。
//如果 5 秒钟图片还未成功返回，那么则进入 catch，报“图片请求超时”的信息。
Promise.race([requestImg(), timeout()]).then(function (results) {
    console.log(results);
}).catch(function (reason) {
    console.log(reason);
});


