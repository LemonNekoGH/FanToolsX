const { writeFileSync } = require('node:fs')
const pkgJson = require('./package.json')

pkgJson.version = process.argv[2]
writeFileSync('package.json', JSON.stringify(pkgJson))
