import { useContext } from 'react';
import { ChatContext } from '../context/ChatContext';

export const useChat = () => {
  const socket = useContext(ChatContext);

  return socket;
};
