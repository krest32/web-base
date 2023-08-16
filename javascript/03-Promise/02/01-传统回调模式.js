/***
 第一步：找到北京的id
 第二步：根据北京的id -> 找到北京公司的id
 第三步：根据北京公司的id -> 找到北京公司的详情
 目的：模拟链式调用、回调地狱
 ***/

// 回调地狱
// 请求第一个API: 地址在北京的公司的id
$.ajax({
    url: 'https://www.easy-mock.com/mock/5a52256ad408383e0e3868d7/lagou/city',
    success(resCity) {
        let findCityId = resCity.filter(item => {
            if (item.id == 'c1') {
                return item
            }
        })[0].id

        $.ajax({
            //  请求第二个API: 根据上一个返回的在北京公司的id “findCityId”，找到北京公司的第一家公司的id
            url: 'https://www.easy-mock.com/mock/5a52256ad408383e0e3868d7/lagou/position-list',
            success(resPosition) {
                let findPostionId = resPosition.filter(item => {
                    if (item.cityId == findCityId) {
                        return item
                    }
                })[0].id
                // 请求第三个API: 根据上一个API的id(findPostionId)找到具体公司，然后返回公司详情
                $.ajax({
                    url: 'https://www.easy-mock.com/mock/5a52256ad408383e0e3868d7/lagou/company',
                    success(resCom) {
                        let comInfo = resCom.filter(item => {
                            if (findPostionId == item.id) {
                                return item
                            }
                        })[0]
                        console.log(comInfo)
                    }
                })
            }
        })
    }
})


