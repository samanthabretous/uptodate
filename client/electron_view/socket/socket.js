import io from 'socket.io-client';

export const socket = io.connect();
console.log(socket)

export default (store) => {
  socket.on('connect', () => {
    console.log('socked connected');
    store.dispatch({
      type: 'CONNECT',
    });
  });
  socket.on('test', () => {
    console.log('test');
  });
};
