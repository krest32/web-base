let a = '㊙️';
let b = '☃️';

const obj = {
    a: a,
    b: b,
    say: function () {
    }
}

// 使用es6的对象表达式，如果对象属性和值一样，可以省略值，函数写法可以省去function，用法如下：
const es6obj = {
    a,
    b,
    say() {

    }
}

console.log(obj);
console.log(es6obj);
