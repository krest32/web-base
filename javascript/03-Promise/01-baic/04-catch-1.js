function rebuy() {
    console.log("开始买笔");
    var p = new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log("买笔失败");
            reject("没带够钱");
        }, 1000);
    });
    return p;
}

function rework(data) {
    console.log("开始写作业：" + data);
    var p = new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log("写完作业");
            resolve("作业本");
        }, 1000);
    });
    return p;
}

rebuy().then(rework).catch(function (data) {
    console.log(data);
});


