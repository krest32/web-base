import axios from "axios";

const instance = axios.create();
instance.interceptors.response.use(
    (response) => {
        return response.data;
    },
    (error) => {
        alert("请求错误")
        return Promise.reject(error);
    }
)

export default instance;