// 注意事项，
// 1、在普通函数中需要使用this的时候，在ts的情况下，需要对this的类型规定，因此可以像上诉一样在参数的位置对this的type类型规定，为any
// 2、prototype的使用，是在函数的基础上使用.prototype，而不是在new出来的obj上面使用.prototype
// 3、在new实例化的时候，由于存在obj的type类型为any，因此需要对new的东西进行处理，就是将new的东西作为any处理
function Fn() {
    this.sayHi = function () {
        console.log('hi');
    };
}
var obj = new Fn();
Fn.prototype.see = function () {
    console.log('这是protype', this);
};
obj.sayHi();
obj.see();
