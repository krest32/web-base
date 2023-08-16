import axios from 'axios'

//　全局配置， 可以加入拦截器等配置
const instance = axios.create(
    {
        baseURL: 'http://localhost:8090',
        timeout: 5000
    }
);
console.log("axios")

export default {instance}