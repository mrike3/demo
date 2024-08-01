import {createRouter,createWebHistory} from "vue-router";
import main from './components/main.vue'
import upload from './components/upload.vue'
import upload2 from './components/upload2.vue'
import upload3 from './components/upload3.vue'
import picture from './components/picture.vue'
import tab from './components/tab.vue'
import vuesaxStudent from './components/vuesaxStudent.vue'

const routers=[
    {
        path: '/demo',
        component: main
    },{
        path: '/demo/upload',
        component: upload
    },{
        path: '/demo/upload2',
        component: upload2
    },{
        path: '/demo/upload3',
        component: upload3
    },{
        path: '/demo/picture',
        component: picture
    },{
        path: '/demo/tab',
        component: tab
    },{
        path: '/demo/vuesaxStudent',
        component: vuesaxStudent
    }
]
const router=createRouter({
    history:createWebHistory(),
    routes:routers
})

export default router