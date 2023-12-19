import {http} from "../utils/request.js";

// 添加日报
export const addArticle = data => {
    return http.post('/article/add',data)
}

// 查询日报列表
export const findArticle = data => {
    return http.post('/article/find',data)
}