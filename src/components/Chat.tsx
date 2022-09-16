import { useState } from 'react';
import { IMessage, IUser } from '../types/socket';
import { useSocket } from '../hooks/useSocket';
import { useChat } from '../hooks/useChat';

const Message = ({ userId, content, timestamp, me }: IMessage & {
  me: IUser | undefined;
}) => {
  const time = new Date(timestamp);
  const fromMe = userId === me?.userId;

  return (
    <div
      id="message"
      className={`w-fit min-w-[8rem] m-1 pt-1 px-2 flex flex-col items-start rounded border bg-primary ${
        fromMe ? 'self-end' : 'self-start'
      }`}
    >
      <span className="text-purple-300">
        <strong>{userId}</strong>
      </span>
      <div id="content">{content}</div>
      <span className="text-sm text-purple-500 self-end">
        {time.getHours()}:{time.getMinutes()}
      </span>
    </div>
  );
};

const Chat = () => {
  const { messages, sendMessage, me } = useSocket();
  const { selectedUser } = useChat();

  const [value, setValue] = useState('');

  const _sendMessage = () => {
    if (!value) return;
    if (!sendMessage) return;
    sendMessage(value);
    setValue('');
  };

  return (
    <>
      {selectedUser && (
        <div className="w-3/4 basis-full overflow-hidden self-end h-full flex flex-col items-center bg-background transtion">
          <div className="py-1 px-2 flex flex-col w-full h-full overflow-auto">
            {messages.map(
              (message) => (
                <Message key={message.id} me={me} {...message} />
              ),
            )}
          </div>
          <div className="w-full py-1 flex rounded">
            <input
              value={value}
              onChange={(event) => setValue(event.target.value)}
              onKeyDown={(event) =>
                event.key === 'Enter' ? _sendMessage() : undefined}
              onSubmit={_sendMessage}
              className="p-1 mx-1 w-full rounded border bg-primary"
              placeholder="Digite sua mensagem..."
            />
            <button
              onClick={_sendMessage}
              className="p-1 mx-1 rounded border bg-primary active:bg-purple-600 hover:bg-purple-700"
            >
              Enviar
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Chat;
