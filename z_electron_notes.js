// front end 
componentDidMount() {
  console.log('mount')
}
handleClick(){
  console.log("handleClick")
    // electron.shell.openExternal('http://www.google.com');
      console.log(ipcRenderer.sendSync('synchronous-message', 'ping'))
  ipcRenderer.on('asynchronous-reply', (event, arg) => {
  console.log(arg) // prints "pong"
})
ipcRenderer.send('asynchronous-message', 'ping')
  }

// back end
const { ipcMain } = require('electron');

ipcMain.on('asynchronous-message', (event, arg) => {
  console.log(arg)  // prints "ping"
  event.sender.send('asynchronous-reply', 'pong')
})

ipcMain.on('synchronous-message', (event, arg) => {
  console.log(arg)  // prints "ping"
  event.returnValue = 'pong'
})