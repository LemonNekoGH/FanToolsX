import { contextBridge } from 'electron'

contextBridge.exposeInMainWorld('VERSION', '0.1.0-alpha.2')
