import axios from "axios";
import {Router as router} from "vue-router";

axios.defaults.timeout = 10000;
axios.interceptors.request.use(
    config=>{
        // 每次发送请求之前判断是否存在token        
        // 如果存在，则统一在http请求的header都加上token，这样后台根据token判断你的登录情况
        // 即使本地存在token，也有可能token是过期的，所以在响应拦截器中要对返回状态进行判断 
        const token = store.state.token;
        token && (config.headers.Authorization = token);
        return config;
    },error=>{
        return Promise.error(error);
    }
);

axios.interceptors.response.use(
    response => {
        // 如果返回的状态码为200，说明接口请求成功，可以正常拿到数据     
        // 否则的话抛出错误
        if (response.status === 200) {
            return Promise.resolve(response);
        } else {
            return Promise.reject(response);
        }
    },
    // 服务器状态码不是2开头的的情况
    // 这里可以跟你们的后台开发人员协商好统一的错误状态码    
    // 然后根据返回的状态码进行一些操作，例如登录过期提示，错误提示等等
    // 下面列举几个常见的操作，其他需求可自行扩展
    error => {
        if (error.response.status) {
            switch (error.response.status) {
                case 401:// 401: 未登录 -跳转登录页面，并携带当前页面的路径 之后跳回？
                    router.replace({
                        path: '/login',query: {
                            redirect: router.currentRoute.fullPath
                        }
                    });
                    break;
                case 403:// 403 token过期 -进行提示 跳转登录页面 清除token
                    console.log('登录过期，请重新登录');
                    localStorage.removeItem('token');// 清除token

                    // 跳转登录页面，并将要浏览的页面fullPath传过去，登录成功后跳转需要访问的页面 
                    setTimeout(() => {
                        router.replace({
                            path: '/login',query: {
                                redirect: router.currentRoute.fullPath
                            }
                        });
                    }, 1000);
                    break;
                case 404:// 404 不存在
                    console.log("页面不存在");
                    break;
                default:// 其他错误，直接抛出错误提示
                    console.log(error.response.data.message);
            }
            return Promise.reject(error.response);
        }
    }
);

export const ajax=(obj)=>{
    if(obj.url==="getToken"){
        axios.get("auth/oauth/token",{
            params:{
                grant_type:"password",
                username:obj.username,
                password:obj.password,
                scope:"all",loginFromType:1
            }
        }).then((res)=>{
            localStorage.setItem("access_token",res.data.access_token);
            localStorage.setItem("token_type",res.data.token_type);
        }).catch((err)=>{
            console.log(err);
        });
        return true;
    }
    if(!obj.url){console.log("ajax Err: url !");return false;}
    if(!obj.success){console.log("ajax Warn:callback?");}
    let _method=axios.get;
    if(obj.type && obj.type==="post"){
        _method=axios.post;
    }
    let tokenType=localStorage.getItem("token_type");
    let _config= {params:obj.data,headers:{}};
    _config.headers[tokenType]=localStorage.getItem("access_token");

    return _method(obj.url,_config).then((res)=>{
        //?
        obj.success(res);
    }).catch((err)=>{
        console.log(err);
        obj.error(err);
    });
}
