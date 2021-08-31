import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/tailwind.css'
import BaseNav from './components/BaseNav'
import BaseNavMobile from './components/BaseNavMobile'
import BaseButton from './components/BaseButton'

const app = createApp(App)
app.use(router).mount('#app')
app.component('base-nav', BaseNav)
app.component('base-nav-mobile', BaseNavMobile)
app.component('base-button', BaseButton)