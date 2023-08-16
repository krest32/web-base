import instance from './axios_config.js'

console.log("api")
export default {

    //得到 查找列表 列表信息
    getTest(aaa) {
        console.log(aaa)
        return instance.instance({method: 'get', url: 'ping',})
    }
}
