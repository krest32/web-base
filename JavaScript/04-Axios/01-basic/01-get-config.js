//执行GET请求
import axios from 'axios'

var instance = axios.create(
    {
        baseURL: 'http://localhost:8090'
    }
)


// 通过配置的方式来发送请求
instance({method: 'get', url: 'ping',})
    .then(resp => console.log(resp.data))