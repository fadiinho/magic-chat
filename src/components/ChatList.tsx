import { useEffect, useRef, useState } from 'react';
import { useSocket } from '../hooks/useSocket';
import { IUser } from '../types/socket';

const Profile = ({ username, profilePicture }: IUser) => {
  return (
    <div className="flex mb-1 rounded bg-primary cursor-pointer hover:bg-purple-700">
      <div id="user-profile-picture">
        {profilePicture ? (
          <img src={profilePicture} />
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            className="w-12 h-12 stroke-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
        )}
      </div>
      <div id="user-info" className="flex flex-col">
        <span>{username}</span>
        <span className="text-purple-500">Hello how are you?</span>
      </div>
    </div>
  );
};

const ChatList = () => {
  const { socket, users } = useSocket();
  const [chatListVisible, setChatListVisible] = useState(true);
  const chatListRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    chatListRef.current?.classList.toggle('-translate-x-full');
  }, [chatListVisible]);

  return (
    <>
      {!chatListVisible && (
        <div
          id="arrow-right"
          className="absolute rounded cursor-pointer sm:pt-1"
          onClick={() => setChatListVisible(true)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            className="w-8 h-8 stroke-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
            />
          </svg>
        </div>
      )}
      <div
        ref={chatListRef}
        className="absolute m-1 w-48 flex flex-col bg-background transition transform sm:relative sm:w-1/4 sm:m-0 sm:p-1 sm:border-r sm:rounded-none"
      >
        <div
          id="arrow-left"
          className="w-fit rounded cursor-pointer"
          onClick={() => setChatListVisible(false)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            className="w-8 h-8 stroke-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
            />
          </svg>
        </div>
        {users.map(
          (item) =>
            socket.id !== item.user.userId && (
              <Profile key={item.user.userId} {...item.user} />
            ),
        )}
      </div>
    </>
  );
};

export default ChatList;
