import { createApp } from 'vue'

import App from '@/App.vue'
import router from '@/router/index'
import pinia from '@/stores/index'
import auth from '@/directives/auth'
import icons from '@/components/icons'

import 'element-plus/dist/index.css'
import '@/styles/index.scss'

const app = createApp(App)

app.use(pinia)
app.use(router)
app.directive('auth', auth)
app.use(icons)

app.mount('#app')
