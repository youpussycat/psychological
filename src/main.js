
import { createApp } from 'vue'
import mitt from "mitt"
import {router} from './router'
import App from './App.vue'
const app = createApp(App)
app.config.globalProperties.$bus = new mitt();
app.use(router)
app.mount('#app')
