import { useState } from "react";

const Message = ({ userId, content, fromMe, timestamp }: { userId: string; content: string; fromMe: boolean; timestamp: number }) => {
    const time = new Date(timestamp);
    return (
        <div
            id="message" 
            className={`w-fit min-w-[8rem] m-1 pt-1 px-2 flex flex-col items-start rounded border bg-primary ${ fromMe ? "self-end" : "self-start"}`}
        >
            <span className="text-purple-300"><strong>{userId}</strong></span>
            <div id="content">
                {content}
            </div>
            <span className="text-sm text-purple-500 self-end">{time.getHours()}:{time.getMinutes()}</span>
        </div> 
    )
}

const Chat = () => {
    const [message, setMessage] = useState("");
    const messages = [{
        userId: "Person 1",
        content: "Hello",
        fromMe: false,
        timestamp: 1663066725138
    }, {
        userId: "Me",
        content: "Hello, how are you?",
        fromMe: true,
        timestamp: 1663102582890
    }, {
        userId: "Person 1",
        content: "I'm fine",
        fromMe: false,
        timestamp: 1663102582890
    }]

    const sendMessage = () => {
        console.log(message);
        setMessage("");
    }

    return (
        <div className="w-3/4 basis-full overflow-hidden self-end h-full flex flex-col items-center bg-background transtion">
            <div className="py-1 px-2 flex flex-col w-full h-full overflow-auto">
                {messages.map((message, i) => 
                    <Message key={i} {...message}/>)
                } 
            </div>
            <div className="w-full py-1 flex rounded">
                <input 
                    value={message}
                    onChange={(event) => setMessage(event.target.value)}
                    onKeyDown={(event) => event.key === "Enter" ? sendMessage() : undefined}
                    onSubmit={sendMessage}
                    className="p-1 mx-1 w-full rounded border bg-primary" 
                    placeholder="Digite sua mensagem..." 
                />
                <button 
                    onClick={sendMessage}
                    className="p-1 mx-1 rounded border  bg-primary active:bg-purple-600 hover:bg-purple-700"
                >Enviar</button>
            </div>
        </div>
    )
}

export default Chat;
