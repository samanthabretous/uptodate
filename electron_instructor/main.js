const electron = require('electron');
// const ipc = require('ipc');

const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const Menu = electron.Menu;

const path = require('path');
const url = require('url');

let mainWindow;

const createWindow = () => {
  mainWindow = new BrowserWindow(require('./config/default').window);

  mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, 'client/index.html'),
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

// ipc.on('close-main-window', () => {
//   app.quit();
// });

const menu = Menu.buildFromTemplate(require('./config/menu')(app));

Menu.setApplicationMenu(menu);

