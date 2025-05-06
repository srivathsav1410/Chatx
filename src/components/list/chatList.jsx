


const ChatList=(chatData)=>{
    console.log(chatData.chatData)
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
{chatData.chatData.map((chat) => (
  <div key={chat.id} className="chatItem" style={{ borderBottom: '1px solid #ccc', padding: '10px' }}>
    <div className="text">
      <div style={{ fontWeight: 'bold', fontSize: '16px', color: '#333' }}>{chat.name}</div>
      <div style={{ fontSize: '14px', color: '#666', marginTop: '4px' }}>{chat.lastMessage}</div>
    </div>
  </div>
))}

</div>

</div>


        
    )
}
export default ChatList; 