import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import { createHead } from '@unhead/vue/client'

import '@unocss/reset/tailwind.css'
import 'virtual:uno.css'
import './assets/main.scss'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

const app = createApp(App)

const head = createHead()

app.use(createPinia())
app.use(head)
app.use(router)

app.mount('#app')
