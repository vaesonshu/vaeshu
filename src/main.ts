import { createApp } from "vue";
import App from "./App.vue";
import ElementPlus from "element-plus";
import "../src/styles/base.less";
import "../src/styles/home.less";
// import '../src/styles/layui.css'
import "../src/assets/css/global.css";
import "element-plus/dist/index.css";
import "element-plus/theme-chalk/dark/css-vars.css";
import store from "./store";
import router from "./router/index";
import "../src/common/vee-validate";
const app = createApp(App);
app.use(ElementPlus);
app.use(router);
app.use(store);
app.mount("#app");
