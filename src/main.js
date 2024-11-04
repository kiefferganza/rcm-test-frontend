import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from './router';
import Antd from "ant-design-vue";
import 'ant-design-vue/dist/reset.css';
import axios from 'axios';

const pinia = createPinia();

// Set the axios base URL directly
axios.defaults.baseURL = 'http://localhost:8000/api/';

const app = createApp(App);
app.use(router).use(Antd).use(pinia).mount('#app');

// Use axios in your components as needed
// For example:
// axios.get('/some-endpoint').then(response => { /* handle response */ });
