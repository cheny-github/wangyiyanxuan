import axios from 'axios'
const ajax = axios.create()

ajax.defaults.baseURL="/wangyi"



ajax.interceptors.request.use(config=>{
    return config;
})

ajax.interceptors.response.use(
    response=>{
        return response.data
    },
    error=>{
        alert('出错了',error)
    }
)



export default ajax