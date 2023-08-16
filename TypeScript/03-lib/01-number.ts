console.log("TypeScript Number 属性: ");
console.log("最大值为: " + Number.MAX_VALUE);
console.log("最小值为: " + Number.MIN_VALUE);
console.log("负无穷大: " + Number.NEGATIVE_INFINITY);
console.log("正无穷大:" + Number.POSITIVE_INFINITY);


// NaN 实例
var month = 0
if (month <= 0 || month > 12) {
    month = Number.NaN
    console.log("月份是：" + month)
} else {
    console.log("输入月份数值正确。")
}


function employee(id: number, name: string) {
    this.id = id
    this.name = name
}

// prototype 实例，代表可以是任何类型
var emp = new employee(123, "admin")
employee.prototype.email = "admin@runoob.com"

console.log("员工号: " + emp.id)
console.log("员工姓名: " + emp.name)
console.log("员工邮箱: " + emp.email)