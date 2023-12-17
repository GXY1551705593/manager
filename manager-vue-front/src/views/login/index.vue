<!-- 登录、注册页面 -->
<!-- @author: 桂新洋 -->
<!-- @date: 2023-12-17 -->
<script setup>
import LoginCard from "@/components/LoginCard/index.vue";

const props = defineProps({
    pageType: {
        type: String,
        default: () => 'register'
    }
})

</script>

<template>
  <div class="container">
      <login-card :page-type="pageType"/>
  </div>
</template>

<style lang="scss" scoped>
.container {
  width: 100vw;
  height: 100vh;
  background: url("@/assets/img/login/login-bg.jpg") no-repeat;
  background-size: cover;
}
</style>