import axios from 'axios';
import Cookie from 'js-cookie';
// import store from '@/store';
import api from '@/constants/api';
// import effects from '@/shared/smc/effects';
import { getBaseUrl } from '@/config/path';
import STATUS from '@/constants/status';

// 创建一个客户端
const http = axios.create({
    baseURL: getBaseUrl(),
    retryDelay: 1000,
    // store
});

export function install(Vue, options) {
    console.log(options)
    if (install.installed) return;
    install.installed = true;

    // 统一加上Authorization header
    http.interceptors.request.use((config) => {
        const token = Cookie.get('token');
        if (token) {
            config.headers.Authorization = token
        }
        // token && (config.headers.Authorization = token);
        return config;
    });

    // 设置响应拦截器,目的是请求出错,错误处理并重新请求,请求成功,状态码不是预期时错误处理
    http.interceptors.response.use((response) => {
        // 请求成功但是状态码不对时的错误状态反馈
        // let { data, config } = response,
        //     store = config.store,
        //     errorHandler = config.error;
        // //非正常业务请求返回状态码,则转入错误处理器
        // if (data.code !== STATUS.OK && errorHandler) {
        //     let error = errorHandler({
        //         store,
        //         state: store.state,
        //         getters: store.getters,
        //         commit: store.commit,
        //         dispatch: store.dispatch,
        //         data
        //     });
        //     //收集错误
        //     config.store.commit({ type: config.failureEffect, payload: { error } });
        // }
        console.log(response)
        return response.data;
    }, (error) => {
        const { config } = error;
        // config.store.commit({ type: config.failureEffect, payload: { error } })
        if (!config || !config.retry) return Promise.reject(error);
        config.retryCount = config.retryCount || 0;
        if (config.retryCount > config.retry) return Promise.reject(error);
        config.retryCount += 1;
        const backUp = new Promise((resolve, reject) => {
            console.log(reject)
            setTimeout(() => {
                resolve();
            }, config.retryDelay || 100);
        });
        return backUp.then(() => http(config));
    });

    Object.defineProperties(Vue.prototype, {
        // 挂载axios
        $http: {
            writable: false,
            configurable: false,
            enumerable: false,
            value: http,
        },
        // 挂载API常量
        $Api: {
            writable: false,
            configurable: false,
            enumerable: false,
            value: api,
        },
        $Status: {
            writable: false,
            configurable: false,
            enumerable: false,
            value: STATUS,
        },
    });
}
export default http;
