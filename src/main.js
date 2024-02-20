import { createApp } from 'vue'
import { createPinia } from 'pinia'
import vClickOutside from "click-outside-vue3"
import App from './App.vue'
import router from './router'
import './assets/main.css'
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";

const app = createApp(App)
const pinia = createPinia();

app.use(pinia);
app.use(router)
app.use(Toast)
app.use(vClickOutside)
app.mount('#app')
