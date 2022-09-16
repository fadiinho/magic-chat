import { createContext, FC, ReactNode, useState } from 'react';
import { IUser } from '../types/socket';

export interface IChatContext {
  selectedUser?: IUser;
  setSelectedUser: React.Dispatch<React.SetStateAction<IUser | undefined>>;
}

export interface ChatContextProps {
  children: ReactNode;
}

export const ChatContext = createContext({} as IChatContext);

export const ChatProvider: FC<ChatContextProps> = ({ children }) => {
  const [ selectedUser, setSelectedUser ] = useState<IUser | undefined>(undefined);

  return (
    <ChatContext.Provider value={{ selectedUser, setSelectedUser }}>
      {children}
    </ChatContext.Provider>
  );
};
