const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const Menu = electron.Menu

const path = require('path')
const url = require('url')

let mainWindow;

function createWindow () {
  mainWindow = new BrowserWindow(require('./config/default').window)

  mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, 'client/index.html'),
    protocol: 'file:',
    slashes: true
  }))

  mainWindow.webContents.openDevTools()

  mainWindow.on('closed', function () {
    mainWindow = null
  })
}

app.on('ready', createWindow)

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function () {
  if (mainWindow === null) {
    createWindow()
  }
})

const menu = Menu.buildFromTemplate(require('./config/menu')(app));
Menu.setApplicationMenu(menu);

