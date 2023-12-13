<!-- 日报页面 -->
<script setup>
import {addArticle} from "./api/article.js";
import {ref} from "vue";

let title = ref('');
let content = ref('');
let authorId = ref('');

function handleAddArticle () {
    const data = {content:content.value,title:title.value,authorId:authorId.value}
    console.log(' data ===',data)
    addArticle(data).then(res=>{
        console.log('res ====',res)
    })
}
</script>

<template>
    <div class="container">
        <el-button class="add-btn" @click="handleAddArticle" type="primary" plain>添加</el-button>
        <div>
            标题： <el-input v-model="title"/>
        </div>
        <div>
            作者Id： <el-input v-model="authorId"/>
        </div>

        <v-md-editor v-model="content"></v-md-editor>
    </div>
</template>

<style  scoped>
.container {
    text-align: left;
    margin-bottom: 30px;
}
.v-md-editor {
    width: 1000px;
    height: 600px;
}
</style>