import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import pages from 'vite-plugin-pages'
import unocss from 'unocss/vite'

export default defineConfig(({ mode }) => {
  return {
    plugins: [
      vue(),
      pages(),
      unocss(),
    ],
    base: './',
    build: {
      outDir: mode === 'ANDROID' ? 'android/app/src/main/assets' : 'dist',
    },
  }
})
