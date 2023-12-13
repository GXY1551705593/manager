/**
 * @Class Request
 * @description axios 0.21.3 http请求插件
 */

import axios from 'axios'

export default class Request {
    config = {
        baseURL:'',
        // withCredentials: true, // send cookies when cross-domain requests
        timeout: 15000,// request timeout
        dataType:"",
        data:{},
        headers: {
            'content-type': 'application/json'
        },
        method:"GET"
    };

    /**
     * @Function
     * @param {Function} f - 设置全局默认配置
     */
    setConfig(f){
        this.config = f(this.config)
    }

    /**
     * 创建axios  实例
     * @type {AxiosInstance}
     */
    service = axios.create(
        {...this.config}
    )

    /**
     * @property {Function} request 请求拦截器
     * @property {Function} response 响应拦截器
     * @type {{request: Request.interceptors.request, response: Request.interceptors.response}}
     */
    interceptors = {
        /**
         * 请求之前拦截,接收一个函数（config）=> {return config}。参数为全局config
         * @param callback 请求拦截器 回调函数
         */
        request:(callback)=>{
            this.service.interceptors.request.use(callback)
        },

        /**
         * @param callback 响应拦截器 回调函数
         */
        response:(callback)=>{
            this.service.interceptors.response.use(callback)
        }
    }

    get(url, params = {}) {
        const options = {};
        options.params = params;
        return this.service({
            ...this.config,
            url: this.config.baseURL + url,
            method: 'GET',
            ...options
        });
    }

    post(url, data, options = {}) {
        return this.service({
            ...this.config,
            url: this.config.baseURL + url,
            data,
            method: 'POST',
            ...options
        });
    }

    put(url, data, options = {}) {
        return this.service({
            ...this.config,
            url: this.config.baseURL + url,
            data,
            method: 'PUT',
            ...options
        });
    }

    delete(url, data, options = {}) {
        return this.service({
            ...this.config,
            url: this.config.baseURL + url,
            data,
            method: 'DELETE',
            ...options
        });
    }

    connect(url, data, options = {}) {
        return this.service({
            ...this.config,
            url: this.config.baseURL + url,
            data,
            method: 'CONNECT',
            ...options
        });
    }

    head(url, data, options = {}) {
        return this.service({
            ...this.config,
            url: this.config.baseURL + url,
            data,
            method: 'HEAD',
            ...options
        });
    }

    options(url, data, options = {}) {
        return this.service({
            ...this.config,
            url: this.config.baseURL + url,
            data,
            method: 'OPTIONS',
            ...options
        });
    }

    trace(url, data, options = {}) {
        return this.service({
            ...this.config,
            url: this.config.baseURL + url,
            data,
            method: 'TRACE',
            ...options
        });
    }
}
