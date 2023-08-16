//执行GET请求
import axios from 'axios'

var instance = axios.create(
    {
        baseURL: 'http://localhost:8090'
    }
)

// post请求一般分为两种类型
instance.post('/url', {id: 1})
    .then(res => {
        console.log(res.data)
    }, err => {
        console.log(err);
    })

instance({
    method: 'post',
    url: '/url',
    data: {
        id: 1
    }
}).then(res => {
    console.log(res.data);
}, err => {
    console.log(err);
})

// form-data请求
let data = {
    //请求参数
}
let formdata = new FormData();
for (let key in data) {
    formdata.append(key, data[key]);
}
this.instance.post('/goods.json', formdata).then(res => {
    console.log(res.data);
}, err => {
    console.log(err);
})
