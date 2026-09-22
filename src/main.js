import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router' // 1. 라우터 파일 가져오기
import './assets/styles/font.scss'
import './assets/styles/reset.scss'

const app = createApp(App)

app.use(router) // 2. ⭐ 중요: Vue 앱에 라우터 장착하기

app.mount('#app')







