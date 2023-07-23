export function isOnAndroid() {
  return import.meta.env.MODE === 'ANDROID'
}

export function isOnElectron() {
  return import.meta.env.MODE === 'ELECTRON' || window.ElectronAPI
}

export function getVersionName() {
  let append = 'WEB'
  if (isOnAndroid())
    append = 'ANDROID'
  else if (isOnElectron())
    return `${window.VERSION}/MACOS`.toUpperCase()

  return `${import.meta.env.VITE_APP_VERSION}/${append}`.toUpperCase()
}
