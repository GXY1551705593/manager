<!-- 注册、登录页面form -->
<!-- @author: 桂新洋 -->
<!-- @date: 2023-12-17 -->
<script setup>
import {useRouter} from "vue-router";
import {reactive} from "vue";
import {registerUser, loginUser} from "@/api/home.js";
import {ElMessage} from "element-plus";

const router = useRouter();

const props = defineProps({
    pageType: {
        type: String,
        default: () => 'register'
    }
})

const form = reactive({
    userId: "",
    userName: "",
    password: "",
    confirmPsd: ""
})

const handeUserLogin = () => {
    return props.pageType === 'register' ? onRegisterUser() : onLoginUser()
}

//用户注册
const onRegisterUser = () => {
    registerUser(form).then(res => {
        if (res.statusCode === 200) {
            ElMessage.success(res.msg)
            router.push({name:'Login'})
        } else {
            ElMessage.error(res.msg)
        }
    })
}

//用户登录
const onLoginUser = () => {
    const loginForm = {userId: form.userId, password: form.password};
    loginUser(loginForm).then(res => {
        if (res.statusCode === 200) {
            ElMessage.success(res.msg);
            sessionStorage.setItem('userInfo',JSON.stringify(res.data))
            router.push({name:'addArticle'});
        } else {
            ElMessage.error(res.msg);
        }
    })
}
</script>

<template>
    <el-card class="register-card">
        <h2 class="title">{{ pageType === 'register' ? "用户注册" : "用户登录" }}</h2>
        <el-form :model="form" label-position="right" label-width="80px">
            <el-form-item label="工号">
                <el-input v-model="form.userId"/>
            </el-form-item>
            <el-form-item label="姓名" v-if="pageType === 'register'">
                <el-input v-model="form.userName"/>
            </el-form-item>
            <el-form-item label="密码">
                <el-input v-model="form.password" type="password"/>
            </el-form-item>
            <el-form-item label="确认密码"  v-if="pageType === 'register'">
                <el-input v-model="form.confirmPsd" type="password"/>
            </el-form-item>
        </el-form>
        <el-button type="primary"
                   @click="handeUserLogin">
            {{ pageType === 'register' ? "注册" : "登录" }}
        </el-button>
    </el-card>
</template>

<style lang="scss" scoped>
.register-card {
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  width: 400px;
  margin: auto;
  text-align: center;
    .title {
        margin-bottom: 20px ;
    }
}
</style>