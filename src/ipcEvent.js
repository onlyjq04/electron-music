const electron = require('electron');
const ipc = electron.ipcMain;

ipc.on('close', function () {
  app.quit();
});

ipc.on('song', function (evt, song) {
  console.log(song);
});