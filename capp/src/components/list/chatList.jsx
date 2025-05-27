
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { openedChatDetails } from '../../features/chat/chatslice';

const ChatList=({IsOpen})=>{
    const dispatch = useDispatch(); 

    const { Friends } = useSelector((state) => state.chat);
    console.log("Friends", Friends);  
  function handleclick(chat){
    dispatch(openedChatDetails(chat)); 
    IsOpen(true)
  }
        return(
        <div className="chatApp">
       <div >
  <input type="text" style={{ width: '100%',height:'20px' }} placeholder="Search..." />
</div>
<div
  className="item"
  style={{
    height:'500px',
    overflowY: 'auto',
    border: '1px solid #ccc',
    marginTop:'20px'
  }}
>
{Friends!=null && Friends.map((chat) => (
  <div key={chat.friendId} className="chatItem" style={{ borderBottom: '1px solid #ccc', padding: '10px' }}>
    <div className="text" style={{ display: 'flex', alignItems: 'center', cursor: 'pointer',gap: '10px' }}>
      <img
        src={chat.imageUrl}
        alt="Profile"
        style={{ width: '50px', height: '50px', borderRadius: '50%' }}/>
      <div style={{ fontWeight: 'bold', fontSize: '16px', color: '#333' }} onClick={(e)=>handleclick(chat)}>{chat.userName}</div>
    </div>
  </div>
))}

</div>

</div>


        
    )
}
export default ChatList; 