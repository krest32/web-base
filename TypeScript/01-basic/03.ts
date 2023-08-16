let x: never;
let y: number;
// never 是其它类型（包括 null 和 undefined）的子类型，代表从不会出现的值。
// 这意味着声明为 never 类型的变量只能被 never 类型所赋值，
// 在函数中它通常表现为抛出异常或无法执行到终止点（例如无限循环），示例代码如下：
// 编译错误，数字类型不能转为 never 类型
// x = 123;

// 运行正确，never 类型可以赋值给 never类型
x = (() => {
    throw new Error('exception')
})();

// 运行正确，never 类型可以赋值给 数字类型
y = (() => {
    throw new Error('exception')
})();

// 返回值为 never 的函数可以是抛出异常的情况
function error(message: string): never {
    throw new Error(message);
}

// 返回值为 never 的函数可以是无法被执行到的终止点的情况
function loop(): never {
    while (true) {
    }
}