var sites: string[];
sites = ["Google", "Runoob", "Taobao"]
console.log(sites[0]);
console.log(sites[1]);

// 我们也可以使用 Array 对象创建数组。
// Array 对象的构造函数接受以下两种值：
// 表示数组大小的数值。
// 初始化的数组列表，元素使用逗号分隔值。
var arr_names: number[] = new Array(4)

for (var i = 0; i < arr_names.length; i++) {
    arr_names[i] = i * 2
    console.log(arr_names[i])
}


var sites2: string[] = new Array("Google", "Runoob", "Taobao", "Facebook")
for (var i = 0; i < sites2.length; i++) {
    console.log(sites2[i])
}

// 数组结构
var arr: number[] = [12, 13]
var [x, y] = arr // 将数组的两个元素赋值给变量 x 和 y
console.log(x)
console.log(y)


// 迭代
var j: any;
var nums: number[] = [1001, 1002, 1003, 1004]

for (j in nums) {
    console.log(nums[j])
}

// 使用
var sites3: string[] = new Array("Google", "Runoob", "Taobao", "Facebook")

function disp1(arr_sites: string[]) {
    for (var i = 0; i < arr_sites.length; i++) {
        console.log(arr_sites[i])
    }
}

disp1(sites3);


function disp2(): string[] {
    return new Array("Google", "Runoob", "Taobao", "Facebook");
}

var sites5: string[] = disp2()
for (var k in sites5) {
    console.log(sites5[k])
}