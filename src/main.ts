import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import { createPinia } from 'pinia'

import { createVuetify } from 'vuetify'

import App from './App.vue'

import 'vuetify/styles'
import './assets/css/style.less'
import 'uno.css'

import routes from '~pages'

const router = createRouter({
  routes,
  history: createWebHashHistory(),
})

const vuetify = createVuetify({
  theme: {
    themes: {
      default: {
        dark: false,
        colors: {
          primary: '#0072ff',
        },
      },
    },
  },
})

createApp(App)
  .use(createPinia())
  .use(router)
  .use(vuetify)
  .mount('#app')

window.onbeforeunload = (e) => {
  e.preventDefault()
  return false
}
