import { defineConfig } from 'electron-vite'
import vue from '@vitejs/plugin-vue'
import pages from 'vite-plugin-pages'
import unocss from 'unocss/vite'

export default defineConfig({
  main: {
    build: {
      outDir: 'dist_electron/main',
    },
  },
  renderer: {
    build: {
      outDir: 'dist_electron/renderer',
    },
    plugins: [
      vue(),
      pages(),
      unocss(),
    ],
  },
  preload: {
    build: {
      outDir: 'dist_electron/preload',
    },
  },
})
