import React, { useEffect } from 'react';
import List from '../components/list/list'
import Chat from '../components/chat/chat';
import { loginRequest } from '../features/auth/authslice';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';  
import { getFriendRequest } from '../features/chat/chatslice'
import { getMessages } from '../features/chat/chatslice';

import './chatApp.css'; 
import ChatImage from '../components/list/chatimage';
function ChatApp() {
  const dispatch = useDispatch();
  const { User } = useSelector((state) => state.auth);   
  const { Friends } = useSelector((state) => state.chat);
  const [open,IsOpen]=React.useState(false);  
  useEffect(() => {
    console.log(User)
        dispatch(getFriendRequest({ userId: User.userId }));

  
  }, []);
  // console.log(Friends)
  return (
    <div className='container' >
    <List IsOpen={IsOpen}/>
 {   !open && <ChatImage/>}  
 {   open && <Chat/>}
    </div>
  );
}
export default ChatApp;