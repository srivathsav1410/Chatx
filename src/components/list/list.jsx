import ChatList from './chatList';
import React, { useState } from 'react';
import './list.css';
import UserInfo from './userinfo';
const List=()=>{
    const [chatData,setChatData]=useState([
        { id: 1, name: 'John Doe', lastMessage: 'Hello!' },
        { id: 2, name: 'Jane Smith', lastMessage: 'How are you?' },
        { id: 3, name: 'Alice Johnson', lastMessage: 'See you later!' },
        { id: 4, name: 'Bob Brown', lastMessage: 'Goodbye!' },
        { id: 5, name: 'Charlie White', lastMessage: 'Nice to meet you!' },
    ]);
    const AddName=(name)=>{
        const newChatData = [...chatData, { id: chatData.length + 1, name: name, lastMessage: 'New message!' }];
        setChatData(newChatData);
    }
    return(
        <div className="list">
            <UserInfo AddName={AddName}/>
            <ChatList chatData={chatData} />
        </div>
    )
}
export default List;