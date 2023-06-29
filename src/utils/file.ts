export function saveFile(file: Blob, fileName: string) {
  const link = document.createElement('a')
  const target = URL.createObjectURL(file)
  link.download = fileName
  link.href = target
  link.click()
}

export async function loadFile(accept: 'image/png,image/jpg,image/jpeg,image/webp,image/svg' | 'save') {
  return new Promise<string>((resolve) => {
    const input = document.createElement('input')
    input.type = 'file'
    input.accept = accept
    input.onchange = () => {
      const fr = new FileReader()
      // 如果是图片就使用 base64 的方式读取
      if (accept === 'image/png,image/jpg,image/jpeg,image/webp,image/svg')
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
