<!-- layout -->
<!-- @author: 桂新洋 -->
<!-- @date: 2023-12-19 -->
<script setup>
import route from '@/router/index.js';
import {useRouter} from "vue-router";

const router = useRouter();
const permissionList = ['article'];
const filterRoutes = route.getRoutes().filter(route => {
    const permission = route.meta.permission || '';
    return permissionList.includes(permission);
})

const handeRouteLink = (child) => {
    router.push({name:child.name})
}
</script>

<template>
    <el-container>
        <el-aside width="250px">
            <el-menu active-text-color="#ffd04b"
                     background-color="#545c64"
                     class="el-menu-vertical-demo"
                     default-active="2"
                     text-color="#fff">
                <el-sub-menu :index="item.name" v-for="item in filterRoutes" :key="item.name">
                    <template #title>{{ item.meta.title }}</template>
                    <el-menu-item :index="child.name" @click="handeRouteLink(child)" v-for="child in item.children" :key="child.name">
                        {{ child.meta.title }}
                    </el-menu-item>
                </el-sub-menu>
            </el-menu>
        </el-aside>

        <el-main>
            <router-view/>
        </el-main>
    </el-container>
</template>

<style scoped lang="scss">
.el-aside {
  height: 100vh;

  .el-menu {
    height: 100%;
  }
}
</style>