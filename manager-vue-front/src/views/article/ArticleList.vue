<!-- 日报列表页面 -->
<!-- @author: 桂新洋 -->
<!-- @date: 2023-12-19 -->
<script setup>
import {findArticle} from "@/api/article.js"
import {ref} from "vue";
import dayjs from "dayjs";

let tableData = ref([])

const getFindArticles = () => {
    findArticle().then(res=>{
        tableData.value = res.data.map(row => {
            row.createDatetime = dayjs(row.createTime).format('YYYY年MM月DD日');
            return row
        }).sort((a,b)=> new Date(b.createTime) - new Date(a.createTime));
        console.log('tableData ===',tableData)
    })
}

getFindArticles ()
</script>

<template>
    <el-table border stripe :data="tableData" style="width: 100%">
        <el-table-column prop="authorId" label="作者id" width="100" align="center"/>
        <el-table-column prop="title" label="标题" align="center" width="180"/>
        <el-table-column prop="content" label="内容" align="center"/>
        <el-table-column prop="createDatetime" label="创建时间" width="180" align="center"/>
    </el-table>
</template>

<style lang="scss" scoped>
.el-table {
    height: 90vh;
}
</style>


