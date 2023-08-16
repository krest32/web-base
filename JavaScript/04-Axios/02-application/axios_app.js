import axiosApi from './axios_api.js'

console.log("app")

axiosApi.getTest('请求参数').then(res => {
    console.log(res.data)
})