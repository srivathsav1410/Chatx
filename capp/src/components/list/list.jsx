import ChatList from './chatList';
import React, { useState } from 'react';
import './list.css';
import UserInfo from './userinfo';
const List=({IsOpen})=>{

 
    // const AddName=(name)=>{
    //     const newChatData = [...chatData, { id: chatData.length + 1, name: name, lastMessage: 'New message!' }];
    //     setChatData(newChatData);
    // }
    return(
        <div className="list">
            <UserInfo />
            <ChatList IsOpen={IsOpen}/>
        </div>
    )
}
export default List;