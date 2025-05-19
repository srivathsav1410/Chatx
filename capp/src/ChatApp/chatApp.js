import React from 'react';
import List from '../components/list/list'
import Chat from '../components/chat/chat';
import './chatApp.css';
function ChatApp() {
  return (
    <div className='container' >
    <List/>
    <Chat/>
    </div>
  );
}
export default ChatApp;