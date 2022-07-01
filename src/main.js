import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios';
import qs from 'qs'
import VueAxios from "vue-axios";

axios.defaults.baseURL = process.env.VUE_APP_API_ENDPOINT;

import './styles/main.scss'

import BaseButton from "@/components/UI/BaseButton";
import AutoTextarea from "@/components/UI/AutoTextarea";


const app = createApp(App);

app.config.globalProperties.$qs = qs;

app.use(VueAxios, axios);
app.use(router);

app.component('base-button', BaseButton);
app.component('auto-textarea', AutoTextarea)

app.mount('#app');
