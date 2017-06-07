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
}

module.exports = SocketListeners;
