import axios from 'axios'


// axios 返回数据
var responseData =
    {
        //data是服务器提供的响应
        "data": "",
        //服务器返回的http状态码
        "status": 200,
        //statusText是服务器返回的http状态信息
        "statusText": 'ok',
        // heades 是服务器响应中携带的headers
        "headers": {},
        //config是axios进行的设置，目的是为了请求(request)
        "config": ""
    }

axios.get("http://localhost:8090/ping")
    .then(
        response => {
            // 返回数据
            console.log(response.data);
            // 返回状态吗
            console.log(response.status);
            console.log(response.statusText);
            console.log(response.headers);
            console.log(response.config);
        }
    )
    .catch(
        response => {
            console.log(response)
        }
    )