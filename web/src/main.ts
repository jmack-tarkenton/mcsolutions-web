import '@/assets/styles/main.scss';
import 'element-plus/theme-chalk/dark/css-vars.css';
import 'uno.css';

import ElementPlus from 'element-plus';
import { createPinia } from 'pinia';
import { createApp } from 'vue';

import App from './App.vue';
import { router } from './router/router.ts';

const app = createApp(App);

const pinia = createPinia();
app.use(router);
app.use(pinia);

app.use(ElementPlus);
app.mount('#app');
