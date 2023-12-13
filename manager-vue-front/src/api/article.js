import {http} from "../utils/request.js";

export const addArticle = data => {
    return http.post('/article/add',data)
}