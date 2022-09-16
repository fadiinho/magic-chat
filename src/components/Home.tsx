import { useSocket } from '../hooks/useSocket';
import Chat from './Chat';
import ChatList from './ChatList';
import { UsernameSelector } from './UsernameSelector';

export const Home = () => {
  const { me } = useSocket();

  return (
    <div className={`h-[90%] flex ${!me ? 'justify-center items-center' : ''}`}>
      {me && (
        <>
          <ChatList />
          <Chat />
        </>
      )}

      {!me && <UsernameSelector />}
    </div>
  );
};
