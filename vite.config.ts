import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import pages from 'vite-plugin-pages'
import unocss from 'unocss/vite'

export default defineConfig({
  plugins: [
    vue(),
    pages(),
    unocss(),
  ],
})
