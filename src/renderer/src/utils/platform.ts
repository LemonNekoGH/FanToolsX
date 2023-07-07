export function isOnAndroid() {
  return import.meta.env.MODE === 'ANDROID'
}

export function isOnElectron() {
  return import.meta.env.MODE === 'ELECTRON'
}
