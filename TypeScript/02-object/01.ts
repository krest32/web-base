// 函数定义
function greet(): string { // 返回一个字符串
    return "Hello World"
}

function caller() {
    var msg = greet() // 调用 greet() 函数
    console.log(msg)
}

// 调用函数
caller()