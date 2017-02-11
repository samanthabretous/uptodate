import io from 'socket.io-client';

export const socket = io.connect();

export default (store) => {
  socket.on('connect', () => {
    store.dispatch({
      type: 'CONNECT',
    });
  });
};
