import { createApp } from 'vue'
import App from './App.vue'
import {createPinia} from 'pinia'
import elmentplus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import router from "./router.js"; './router.js'
import vuesax from 'vuesax-alpha'
import 'vuesax/dist/vuesax.min.css'

const app=createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component);
}
app.use(createPinia())
app.use(elmentplus)
app.use(router)
app.use(vuesax)
app.mount('#app')
