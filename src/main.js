import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/tailwind.css'
import BaseNav from './components/BaseNav'

const app = createApp(App)
app.use(router).mount('#app')
app.component('base-nav', BaseNav)