import axios from "axios";
import {Router as router} from "vue-router";

axios.defaults.timeout = 10000;
axios.interceptors.request.use(
    config=>{//每次请求时 执行 config为ajax的obj
        // 每次发送请求之前判断是否存在token        
        // 如果存在，则统一在http请求的header都加上token，这样后台根据token判断你的登录情况
        // 即使本地存在token，也有可能token是过期的，所以在响应拦截器中要对返回状态进行判断 
        if(config.url.indexOf("/api")===0){//如果是进行后台请求
            const tokenHead = localStorage.getItem("token_type");
            const tokenBody = localStorage.getItem("access_token")
            if(config.url==="/api/auth/oauth/token"){//登陆url
                config.headers.Authorization = "Basic eGJyOmNvbS54Ynl=";
            }else if(tokenHead && tokenBody){//如果存在
                config.headers.authorization = `${tokenHead} ${tokenBody}`;
            }else{//不是登陆但没有token，转回登陆界面
                // 未登录 -跳转登录页面，并携带当前页面的路径 之后跳回？
                router.replace({
                    path: '/login',query: {
                        redirect: router.currentRoute.fullPath
                    }
                });
            }
        }

        //若出错会抛出给下面的onRejected
        return config;
    },error=>{
        return Promise.error(error);
    }
);

axios.interceptors.response.use(
    response => {//每次得到回应时执行？
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
    error => {//每次出错执行
        console.log("onRejected-error：",error);
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
    // if(obj.url==="getToken"){
    //     axios.post("/api/auth/oauth/token",{
    //         params:{
    //             grant_type:"password",
    //             username:obj.username,
    //             password:obj.password,
    //             scope:"all",loginFromType:1
    //         },
    //     }).then((res)=>{
    //         if(res){
    //             console.log("myRequest:",res);
    // if(obj.success)obj.success(res);
    //         }else{
    //             if(obj.error)obj.error('false?');
    //         }
    //     }).catch((err)=>{
    //         console.log(err);
    //     });
    //     return true;
    // }
    if(!obj.url){console.log("ajax Err: url !");return false;}
    let _method=axios.post;
    if(obj.type && obj.type==="get"){
        _method=axios.get;
    }
    let tokenType=localStorage.getItem("token_type");
    let _config= {params:obj.data,headers:{
            authorization:tokenType+" "+localStorage.getItem("access_token")
        }
    };
    return _method(obj.url,_config).then((res)=>{
        //?
        if(obj.success)obj.success(res);
    }).catch((err)=>{
        console.log(err);
        if(obj.error)obj.error(err);
    });
}
