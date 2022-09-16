import { createContext, FC, ReactNode, useEffect, useState } from 'react';
import { socket } from '../lib/socket/connectToSocket';
import { emitUserSetup } from '../lib/socket/emit';
import { IUser, IMessage, TUsersUpdate } from '../types/socket';

export interface ISocketContext {
    me?: IUser;
    setMe: React.Dispatch<React.SetStateAction<IUser | undefined>>;
    messages: IMessage[];
    users: TUsersUpdate;
    username: string;
    setUsername: React.Dispatch<React.SetStateAction<string>>;
    sendMessage?: (message: string) => void;
    socket: typeof socket;
}

export interface SocketContextProps {
    children: ReactNode;
}

export const SocketContext = createContext({} as ISocketContext);

export const SocketProvider: FC<SocketContextProps> = ({ children }) => {
    const [me, setMe] = useState<IUser | undefined>(undefined);
    const [username, setUsername] = useState<string>('');

    const [messages, setMessages] = useState<IMessage[]>([]);
    const [users, setUsers] = useState<TUsersUpdate>([]);

    const onUsersUpdate = (update: TUsersUpdate) => {
        setUsers(update);
    }

    const onSetupFinish = (update: IUser) => {
        setMe(update);
    }

    useEffect(() => {
        if (!username) return;

        emitUserSetup({ username })
    }, [username])

    useEffect(() => {
        socket.on('setup_finish', onSetupFinish);
        socket.on('users_update', onUsersUpdate);

        return () => {
            socket.off('setup_finish', onSetupFinish);
            socket.off('users_update', onUsersUpdate);
        }
    }, [])


    return (
        <SocketContext.Provider
            value={{
                me,
                username,
                setUsername,
                setMe,
                users,
                messages,
                socket
            }}>
            {children}
        </SocketContext.Provider>
   )
}
