<!-- 添加日报页面 -->
<!-- @author: 桂新洋 -->
<!-- @date: 2023-12-12 -->
<script setup>
import {addArticle} from "@/api/article.js";
import {ref} from "vue";
import { ElMessage } from 'element-plus'

let title = ref('');
let content = ref('');

function handleAddArticle () {
    const {userId} = JSON.parse(sessionStorage.getItem('userInfo'));
    if (!title.value){
        ElMessage.error("请填入标题")
        return
    }
    if (!content.value){
        ElMessage.error("请填入日报内容")
        return
    }
    const data = {content: content.value, title: title.value, authorId: userId};
    addArticle(data).then(res => {
        if (res.statusCode === 200){
            ElMessage.success(res.msg);
        }
    })
}
</script>

<template>
    <div class="container">
        <div class="form-item">
            <div class="label">标题：</div>
            <el-input v-model="title"/>
        </div>
        日报内容：
        <v-md-editor mode="edit" v-model="content"></v-md-editor>
        <el-button class="add-btn" @click="handleAddArticle" type="primary" plain>添加</el-button>
    </div>
</template>

<style  scoped lang="scss">
.container {
    text-align: left;
    width: 800px;
    margin: 20px auto;
    position: relative;
    .form-item {
        display: flex;
        align-items: center;
        margin-bottom: 15px;
        .label {
            width: 80px;
        }
    }
    .add-btn {
        position: absolute;
        top: 0;
        right: -100px;
    }
    .v-md-editor {
        width: 100%;
        height: 600px;
    }
}
</style>