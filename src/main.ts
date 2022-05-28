import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import axios from 'axios'
// import { Form, Field, configure  } from 'vee-validate';
// import { setLocale } from '@vee-validate/i18n'
import '../src/styles/base.less'
import '../src/styles/home.less'
import '../src/styles/layui.css'
import '../src/assets/css/global.css'
import 'element-plus/dist/index.css'
import 'element-plus/theme-chalk/dark/css-vars.css'
import router from './router/index'
axios.defaults.baseURL = process.env.NODE_ENV !== 'production' ? 'http://localhost:3001' : ''
// setLocale('zh_CN')
const app = createApp(App)
// app.component('Form', Form )
// app.component('Field', Field )
app.use(ElementPlus)
app.use(router)
app.mount('#app')
