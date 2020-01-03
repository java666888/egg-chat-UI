//请求拦截器  拦截axios发送的请求 附带上token
import axios from 'axios'
import router from '../router/index'
//请求拦截器
axios.interceptors.request.use(
    config=>{
        //判断token是否存在
        if(localStorage.token){
            config.headers.Authorization="Bearer "+localStorage.token;
        }
        return  config;
    },
    err=>{
        return Promise.reject(err)
    }
);

//响应拦截器 可以判断后台响应 token是否过期  过期可以跳转首页
axios.interceptors.response.use(
    response=>{
        if(response.data.code==10002){
            router.replace("/");
            console.log("token过期或错误");
            localStorage.removeItem("token");
        }else if(response.data.code==10000){
            router.replace("/");
            localStorage.removeItem("token");
            console.log("用户名密码错误,或未登录");
        }
        return response;
    },
    err=>{
        return Promise.reject(err);
    }
);

export default axios