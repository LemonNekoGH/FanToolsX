import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import { createPinia } from 'pinia'
import App from './App.vue'
import './assets/css/style.css'
import './assets/js/rem.js'

import 'uno.css'

import routes from '~pages'

const router = createRouter({
  routes,
  history: createWebHashHistory(),
})

createApp(App)
  .use(createPinia())
  .use(router)
  .mount('$app')
