<!-- 日报页面 -->
<script setup>
import {ref} from "vue";

let text = ref('')
</script>

<template>
    <v-md-editor v-model="text"></v-md-editor>
</template>

<style  scoped>
.v-md-editor {
    width: 1000px;
    height: 600px;
}
</style>