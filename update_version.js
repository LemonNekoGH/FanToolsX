const { writeFileSync } = require('node:fs')
const pkgJson = require('./package.json')

pkgJson.version = process.argv[2]
writeFileSync('package.json', JSON.stringify(pkgJson))
writeFileSync('src/renderer/.env', `VITE_APP_VERSION=${process.argv[2]}`)
writeFileSync('src/renderer/.env.ANDROID', `VITE_APP_VERSION=${process.argv[2]}`)
writeFileSync('src/preload/index.ts', `import { contextBridge } from 'electron'

contextBridge.exposeInMainWorld('VERSION', '${process.argv[2]}')
`)
