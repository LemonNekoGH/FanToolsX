export function saveFile(file: Blob, fileName: string) {
  const link = document.createElement('a')
  const target = URL.createObjectURL(file)
  link.download = fileName
  link.href = target
}
