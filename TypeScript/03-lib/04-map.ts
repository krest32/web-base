let nameSiteMapping = new Map();

// 设置 Map 对象
nameSiteMapping.set("Google", 1);
nameSiteMapping.set("Runoob", 2);
nameSiteMapping.set("Taobao", 3);

// 获取键对应的值
console.log(nameSiteMapping.get("Runoob"));     // 2

// 判断 Map 中是否包含键对应的值
console.log(nameSiteMapping.has("Taobao"));       // true
console.log(nameSiteMapping.has("Zhihu"));        // false

// 返回 Map 对象键/值对的数量
console.log(nameSiteMapping.size);                // 3

// 删除 Runoob
console.log(nameSiteMapping.delete("Runoob"));    // true
console.log(nameSiteMapping);
// 移除 Map 对象的所有键/值对
nameSiteMapping.clear();             // 清除 Map
console.log(nameSiteMapping);


let nameSiteMapping2 = new Map();

nameSiteMapping2.set("Google", 1);
nameSiteMapping2.set("Runoob", 2);
nameSiteMapping2.set("Taobao", 3);

// 迭代 Map 中的 key
// @ts-ignore
for (let key of nameSiteMapping2.keys()) {
    console.log(key);
}

// 迭代 Map 中的 value
// @ts-ignore
for (let value of nameSiteMapping2.values()) {
    console.log(value);
}

// 迭代 Map 中的 key => value
// @ts-ignore
for (let entry of nameSiteMapping2.entries()) {
    console.log(entry[0], entry[1]);
}

// 使用对象解析
// @ts-ignore
for (let [key, value] of nameSiteMapping2) {
    console.log(key, value);
}