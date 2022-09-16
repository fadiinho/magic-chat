import { useContext } from 'react';
import { SocketContext } from '../context/SocketContext';

export const useSocket = () => {
  const socket = useContext(SocketContext);

  return socket;
};
