import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import '@unocss/reset/tailwind.css'
import 'virtual:uno.css'
import './assets/main.scss'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
