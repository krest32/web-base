//执行GET请求
import axios from 'axios'

var instance = axios.create(
    {
        baseURL: 'http://localhost:8090'
    }
)

const data = {
    "haha": "111"
}

//发送post请求 发送 json
instance({method: 'post', url: 'user2', data: data})
    .then(res => console.log(res.data))
    .catch(err => console.log(err.response.status));
