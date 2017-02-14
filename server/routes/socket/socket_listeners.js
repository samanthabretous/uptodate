class SocketListeners {
  constructor(socket, io) {
    this.socket = socket;
    this.io = io;
  }
  disconnectSocket() {
    this.socket.on('disconnect', () => {
      this.socket.leave();
    });
  }
  log() {
    console.log('socket class', this.socket);
  }
}

module.exports = SocketListeners;
