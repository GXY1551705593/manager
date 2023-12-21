<!-- 日报列表页面 -->
<!-- @author: 桂新洋 -->
<!-- @date: 2023-12-19 -->
<script setup>
import {findArticle} from "@/api/article.js"
import {ref} from "vue";
import dayjs from "dayjs";

let tableData = ref([]);
let total = ref(0);
let pageIndex = ref(1);
let pageSize = ref(10);

const getFindArticles = () => {
    const data = {authorId: '',pageSize:pageSize.value,pageIndex:pageIndex.value}
    findArticle(data).then(res=>{
        total.value = res.total;
        tableData.value = res.data.map(row => {
            row.createDatetime = dayjs(row.createTime).format('YYYY年MM月DD日');
            return row
        })
    })
}

getFindArticles ()
</script>

<template>
    <div class="container">
        <el-table border stripe :data="tableData" style="width: 100%">
            <el-table-column type="index" label="序号" width="60" align="center"/>
            <el-table-column prop="authorId" label="作者id" width="100" align="center"/>
            <el-table-column prop="title" label="标题" align="center" width="180"/>
            <el-table-column prop="content" label="内容" align="center"/>
            <el-table-column prop="createDatetime" label="创建时间" width="180" align="center"/>
        </el-table>
        <div class="pagination-block">
            <el-pagination layout="prev, pager, next,total"
                           v-model:current-page="pageIndex"
                           :page-size="pageSize"
                           @current-change="getFindArticles"
                           :total="total" />
        </div>
    </div>
</template>

<style lang="scss" scoped>
.container {
    .pagination-block{
        position: fixed;
        bottom: 80px;
        transform: rotateX(-50%);
        left: 50%;
    }
}
</style>


