/* eslint-disable */
import Request from './http.js';
const http = new Request();
const baseURL = 'http://127.0.0.1:8888';

// request全局参数设置
http.setConfig(config => {
    /* 设置全局配置 */
    config.baseURL = baseURL; /* 根域名 */
    config.headers = {
        ...config.headers,
    };

    return config;
})

http.interceptors.request(
    config => {
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

http.interceptors.response(
    response => {
        /* 请求之后拦截器 */
        switch (response.status) {
            case 200:
                return response.data;
            case 400:
                return Promise.reject(response.data.message);
            case 401:
                return Promise.reject(response.data.message);
            case 405:
                return Promise.reject(response.data.message);
            case 404:
                return Promise.reject(response.data.message);
            case 429:
                return Promise.reject(response.data.message);
            case 500:
                return Promise.reject(response.data.message);
            // default:
            //     return Promise.reject(response.data.message);
        }
    },
    error => {
        const { code } = error && error.data || {}
        return Promise.reject(error);
    }
);

export { http };
