import io from 'socket.io-client';

export const socket = io.connect('http://localhost:2020');

export default (store) => {
  socket.on('connect', () => {
    store.dispatch({
      type: 'CONNECT',
    });
  });
  socket.on('test', () => {
    console.log('test');
  });
};
