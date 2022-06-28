// 这是测试数据：
var obj = {
    "depts": [{
            "id": "11",
            "pid": "2"
        },
        {
            "id": "12",
            "pid": "11"
        },
        {
            "id": "13",
            "pid": "11"
        },
        {
            "id": "14",
            "pid": "12"
        },
        {
            "id": "15",
            "pid": "6"
        },
        {
            "id": "16",
            "pid": "7"
        }
    ]
}
console.log(obj)


function toTree(data) {
    let ans = {};
    let result = [];
    let map = {};
    // 放入到一个Map中，供后面的程序调用
    data.forEach(item => {
        map[item.id] = item;
    });
    // 遍历list
    data.forEach(item => {
        // 从Map中获取的到父节点
        let parent = map[item.pid];
        //  如果父节点存在
        if (parent) {
            // 如果存在childs节点，就直接放入元素，如果不存在，就行
            if (!parent.childs) {
                parent.childs = []
            }
            parent.childs.push(item);
        } else {
            // 如果父节点不存在
            result.push(item);
        }
    });
    ans = { "depts": result }
    return ans;
}

console.log(JSON.stringify(toTree(obj.depts)))