import axios from 'axios'


// 请求拦截器
this.axios.interceptors.request.use(config => {
    // 发生请求前的处理
    return config
}, err => {
    // 请求错误处理
    return Promise.reject(err);
})

//或者用axios实例创建拦截器
let instance = $axios.create();
instance.interceptors.request.use(config => {
    return config
})


this.$axios.interceptors.response.use(res => {
    //请求成功对响应数据做处理

    return res //该返回对象会传到请求方法的响应对象中
}, err => {
    // 响应错误处理

    return Promise.reject(err);
})

// 取消拦截
let instance = this.$axios.interceptors.request.use(config => {
    config.headers = {
        token: ''
    }
    return config
})

//取消拦截
this.$axios.interceptors.request.eject(instance);
let instance = this.$axios.interceptors.request.use(config => {
    config.headers = {
        token: ''
    }
    return config
})

//取消拦截
this.axios.interceptors.request.eject(instance);


// 错误处理
this.axios.get('/url').then(res => {
    
}).catch(err => {
    //请求拦截器和响应拦截器抛出错误时，返回的err对象会传给当前函数的err对象
    console.log(err);
})
