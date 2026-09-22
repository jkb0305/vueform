import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../components/HomeView.vue'
import AboutView from '../components/AboutView.vue'
import filelist from '../guide/mockup.vue'
import guide from '../guide/guide.vue'


const routes = [
    {
        path: '/',
        name: 'list',
        component: filelist
    },
    {
        path: '/guide',
        name: 'guide',
        component: guide
    },
    {
        path: '/home',
        name: 'home',
        component: HomeView
    },
    {
        path: '/about',
        name: 'about',
        component: AboutView
    }
]

const router = createRouter({
  // 브라우저의 History API를 사용하여 깨끗한 URL(/#/ 없는 주소)을 만듭니다.
  history: createWebHashHistory(),
  routes
})

export default router