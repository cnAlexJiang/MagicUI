import { ipcRenderer } from 'electron';

export function onCreateWindow(callback: (data: any) => void) {
  ipcRenderer.on('user-data', (event, args) => {
    callback(args);
  });
}

export function autoSaveWebGLPage(data: any) {
  return ipcRenderer.invoke('auto-save-webgl-page', data);
}

export function onSocketResult(callback: Function) {
  ipcRenderer.on('socket-result', (event, args) => {
    callback(args);
  });
}

export function onUpdateUser(callback: Function) {
  ipcRenderer.on('update-user-data', (event, args) => {
    callback(args);
  })
}