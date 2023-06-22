import { createApp } from 'vue'
import App from './App.vue'
import router from './router.js'

import axios from "axios";
axios.defaults.baseURL = 'http://localhost:3001';

createApp(App).use(router).mount('#app')
