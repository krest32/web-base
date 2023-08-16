//执行GET请求
import axios from 'axios'

var instance = axios.create(
    {
        baseURL: 'http://localhost:8090'
    }
)


//发送post请求
instance({method: 'post', url: 'user2'})
    .then(res => console.log(res.data))
    .catch(err => console.log(err.response.status));
