const electron = require('electron');
const log = require('electron-log');
const { autoUpdater } = require('electron-updater');
const isDev = require('electron-is-dev');
const path = require('path');

const { dialog, app, BrowserWindow } = require('electron');

// Setup logger
autoUpdater.logger = log;
autoUpdater.logger.transports.file.level = 'info';

// Setup updater events
autoUpdater.on('checking-for-update', () => {
  console.log('checking for update...');
});

// autoUpdater.on('update-available', () => {
//   console.log('Update available');
//   console.log('Version:', info.version);
//   console.log('Release Date:', info.releaseDate);
// });

autoUpdater.on('update-not-available', () => {
  console.log('Update not available');
});

autoUpdater.on('download-progress', () => {
  console.log(`Progress: ${Math.floor(progress.percent)}`);
});

autoUpdater.on('update-downloaded', () => {
  console.log('Update downloaded');
  autoUpdater.quitAndInstall();
});

autoUpdater.on('error', error => {
  console.error(error);
});

const windows = {};

app.on('ready', () => {

  // Trigger update check
  autoUpdater.checkForUpdates();
  // if(!isDev) {
  //   autoUpdater.checkForUpdates();
  // }

  windows.main = new BrowserWindow({
    width: 450,
    height: 200,
    show: false
  });

  windows.main.loadURL(`file://${path.join(__dirname, 'index.html')}`);

  windows.main.on('ready-to-show', () => {
    windows.main.show();
  });

  windows.main.on('closed', () => {
    delete windows.main;
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

