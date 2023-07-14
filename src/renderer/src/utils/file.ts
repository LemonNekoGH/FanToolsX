import { isOnAndroid } from './platform'

export function saveFile(file: Blob, fileName: string) {
  const link = document.createElement('a')
  const target = URL.createObjectURL(file)
  link.download = fileName
  link.href = target
  link.click()
}

/**
 * 在 Android 上调用时并不会马上返回值，而是调用回调，所以无法直接通过 emit 来提醒父组件图片更新了，只能用全局变量来告诉回调，应该更新哪个值
 */
export function loadFileFromAndroid(accept: 'image/*' | '*.akf,*.json', key: LoadingKey): string {
  window.Android.loadingKey = key
  return window.Android.loadFile(accept)
}

export async function loadFile(accept: 'image/*' | '*.akf,*.json', key: LoadingKey) {
  if (isOnAndroid())
    return loadFileFromAndroid(accept, key)

  return new Promise<string>((resolve) => {
    const input = document.createElement('input')
    input.type = 'file'
    input.accept = accept
    input.onchange = () => {
      const fr = new FileReader()
      // 如果是图片就使用 base64 的方式读取
      if (accept === 'image/*')
        fr.readAsDataURL(input.files![0])

      // 否则读取纯文本
      else
        fr.readAsText(input.files![0])

      fr.onload = (_) => {
        const base64Str = fr.result as string
        resolve(base64Str)
      }
    }

    input.click()
  })
}

export function removeBase64DataUrlPrefix(dataUrl: string) {
  return dataUrl.replace(/^data:image\/\w+;base64,/, '')
}
