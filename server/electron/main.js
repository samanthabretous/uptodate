const electron = require('electron');
const windowConfig = require('./config/default').window;

const app = electron.app;
const BrowserWindow = electron.BrowserWindow;


const path = require('path');
const url = require('url');

let mainWindow;

const createWindow = () => {
  mainWindow = new BrowserWindow(windowConfig);

  mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, '../../', 'client/electron_view/index.html'),
    protocol: 'file:',
    slashes: true,
  }));

  mainWindow.webContents.openDevTools();

  mainWindow.on('closed', () => {
    mainWindow = null;
  });
};

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});


