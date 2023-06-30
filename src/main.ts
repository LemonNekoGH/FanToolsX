import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import { createPinia } from 'pinia'

import { createVuetify } from 'vuetify'
import { aliases, mdi } from 'vuetify/iconsets/mdi'

import App from './App.vue'

import 'vuetify/styles'
import './assets/css/style.less'
import 'uno.css'
import '@mdi/font/css/materialdesignicons.css'

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
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi,
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
