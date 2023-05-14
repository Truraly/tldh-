import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Antd from 'ant-design-vue';
import "@/assets/base.css"

const app = createApp(App).use(Antd)
console.log(app.config)
app.use(router)

app.mount('#app')
