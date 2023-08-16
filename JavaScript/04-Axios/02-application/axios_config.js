import axios from 'axios'

const instance = axios.create(
    {
        baseURL: 'http://localhost:8090',
        timeout: 5000
    }
);
console.log("axios")

export default {instance}