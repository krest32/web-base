var promise = new Promise(function (resolve, reject) {
    $.ajax({
        url: 'localhost:8090/ping',
        method: 'get',
        datatype: 'json',
        success: (res) => {
            resolve(res)
        },
        error: (err) => {
            reject(err)
        }
    });
});

promise.then(function (res) {
    return res.data
}).then(function (data) {
    return data.result;
}).then(function (result) {
    console.log(result)
});

//推荐使用箭头函数简写成,极大提升了代码的简洁性和可读性
promise.then(res => res.data).then(data => data.result).then(result => console.log(result));

