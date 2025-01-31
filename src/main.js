import './assets/main.css'
import './index.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import axios from 'axios'

// 設定 Axios 的預設配置
axios.interceptors.request.use((config) => {
  const token = localStorage.getItem('token')
  // console.log(config)
  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`
  }
  return config
})

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
