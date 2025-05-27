import './chat.css';
import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMessages, sendMessage } from '../../features/chat/chatslice';
import { HubConnectionBuilder } from "@microsoft/signalr";

const Chat = () => {
    const dispatch = useDispatch();
    const [msg, setMsg] = useState("");   
    const { openedChat, messages } = useSelector((state) => state.chat);
    const { User } = useSelector((state) => state.auth);
    const connectionRef = useRef(null);

    useEffect(() => {
        if (!openedChat || !User) return;

        dispatch(getMessages({ userId: User.userId, friendId: openedChat.friendId }));

        const connection = new HubConnectionBuilder()
            .withUrl("https://localhost:7271/chathub") 
            .build();

        connection.start()
            .then(() => {
                console.log("SignalR Connected");
                connection.on("ReceiveMessage", (message) => {
                    if (
                        (message.senderId === openedChat.friendId && message.receiverId === User.userId) ||
                        (message.senderId === User.userId && message.receiverId === openedChat.friendId)
                    ) {
                        dispatch(getMessages({ userId: User.userId, friendId: openedChat.friendId }));
                    }
                });
            })
            .catch(error => console.error("SignalR Connection Error:", error));

        connectionRef.current = connection;

        return () => {
            connection.stop();
        };
    }, [openedChat, User?.userId]);

    const handleClick = (e) => setMsg(e.target.value);

    const buttonClick = () => {
        const sendMsg = {
            senderId: User.userId,
            receiverId: openedChat.friendId,
            content: msg
        };
        dispatch(sendMessage(sendMsg));
        setMsg("");
    };

    return (
        openedChat &&
        <div className='chat'>
            <div className='top'>
                <img src="https://chatappx.blob.core.windows.net/avatars/1.jpg" alt="User" />
                <div className='user'>
                    <div className="texts">
                        <span>{openedChat.userName}</span>
                        <p>Last seen today at 12.00pm</p>
                    </div>
                </div>
            </div>
            <div className='center'>
                {messages?.length > 0 && messages.map((message) => (
                    <div className={`message ${message.senderId === openedChat.friendId ? 'sender' : 'owner'}`} key={message.id}>
                        <p>{message.content}</p>
                    </div>
                ))}
            </div>
            <div className='bottom'>
                <textarea value={msg} placeholder='Type a message' onChange={handleClick} />
                <button disabled={!msg || msg.length <= 1} onClick={buttonClick}>Send</button>
            </div>
        </div>
    );
};

export default Chat;
