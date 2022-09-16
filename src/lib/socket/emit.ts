import { socket } from './connectToSocket';

export const emitUserSetup = ({ username }: { username: string }) => {
  socket.emit('user_setup', { username });
};
