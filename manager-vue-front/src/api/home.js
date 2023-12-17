import {http} from "../utils/request.js";

export const registerUser = data => {
    return http.post('/user/register',data)
}

export const loginUser = data => {
    return http.get('/user/login',data)
}