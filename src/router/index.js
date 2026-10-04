import { createRouter, createWebHashHistory } from 'vue-router'
import scroll from '../guide/scroll.vue'
import scrollMain from '../guide/scroll-main.vue'
import scrollSet from '../guide/scroll-set.vue'
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
        path: '/scroll',
        name: 'scroll',
        component: scroll
    },
    {
        path: '/scroll1',
        name: 'scroll-set',
        component: scrollSet
    },
    {
        path: '/scroll2',
        name: 'scroll-main',
        component: scrollMain
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