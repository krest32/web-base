var nameSiteMapping = new Map();
// 设置 Map 对象
nameSiteMapping.set("Google", 1);
nameSiteMapping.set("Runoob", 2);
nameSiteMapping.set("Taobao", 3);
// 获取键对应的值
console.log(nameSiteMapping.get("Runoob")); // 2
// 判断 Map 中是否包含键对应的值
console.log(nameSiteMapping.has("Taobao")); // true
console.log(nameSiteMapping.has("Zhihu")); // false
// 返回 Map 对象键/值对的数量
console.log(nameSiteMapping.size); // 3
// 删除 Runoob
console.log(nameSiteMapping.delete("Runoob")); // true
console.log(nameSiteMapping);
// 移除 Map 对象的所有键/值对
nameSiteMapping.clear(); // 清除 Map
console.log(nameSiteMapping);
var nameSiteMapping2 = new Map();
nameSiteMapping2.set("Google", 1);
nameSiteMapping2.set("Runoob", 2);
nameSiteMapping2.set("Taobao", 3);
// 迭代 Map 中的 key
// @ts-ignore
for (var _i = 0, _a = nameSiteMapping2.keys(); _i < _a.length; _i++) {
    var key = _a[_i];
    console.log(key);
}
// 迭代 Map 中的 value
// @ts-ignore
for (var _b = 0, _c = nameSiteMapping2.values(); _b < _c.length; _b++) {
    var value = _c[_b];
    console.log(value);
}
// 迭代 Map 中的 key => value
// @ts-ignore
for (var _d = 0, _e = nameSiteMapping2.entries(); _d < _e.length; _d++) {
    var entry = _e[_d];
    console.log(entry[0], entry[1]);
}
// 使用对象解析
// @ts-ignore
for (var _f = 0, nameSiteMapping2_1 = nameSiteMapping2; _f < nameSiteMapping2_1.length; _f++) {
    var _g = nameSiteMapping2_1[_f], key = _g[0], value = _g[1];
    console.log(key, value);
}
