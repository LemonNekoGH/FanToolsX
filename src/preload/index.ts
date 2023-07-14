import { contextBridge, ipcRenderer } from 'electron'

contextBridge.exposeInMainWorld('VERSION', '0.1.0-alpha.2')
contextBridge.exposeInMainWorld('ElectronAPI', {
  openInBrowser: (url: string) => {
    ipcRenderer.send('open-in-browser', url)
  },
})
