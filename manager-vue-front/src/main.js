import { createApp } from 'vue'
import './style.css';
import App from './App.vue';
import VMdEditor from '@kangc/v-md-editor';
import '@kangc/v-md-editor/lib/style/base-editor.css';
import githubTheme from '@kangc/v-md-editor/lib/theme/github.js';
import '@kangc/v-md-editor/lib/theme/style/github.css';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import hljs from 'highlight.js';

VMdEditor.use(githubTheme, {
    Hljs: hljs,
});

createApp(App).use(ElementPlus).use(VMdEditor).mount('#app')








