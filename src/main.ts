import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import '../src/styles/base.less'
import '../src/styles/nav.less'
import 'element-plus/dist/index.css'
import 'element-plus/theme-chalk/dark/css-vars.css'
import router from './router/index'
const app = createApp(App)
app.use(ElementPlus)

app.use(router)
app.mount('#app')
