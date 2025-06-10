
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { openedChatDetails,sendRequest} from '../../features/chat/chatslice';
import {getSearchRequest} from '../../features/auth/authslice'

const ChatList=({IsOpen})=>{
    const dispatch = useDispatch(); 
    const[query, setQuery] = React.useState('');
    const { Friends } = useSelector((state) => state.chat);
      const [filteredFriends, setFilteredFriends] = React.useState([]);
      const[AddFriend, setAddFriend] = React.useState([]);
      const {Users}=useSelector((state)=> state.auth);
      const {User}=useSelector((state)=>state.auth)

  function handleclick(chat){
    dispatch(openedChatDetails(chat)); 
    IsOpen(true)
  }
      console.log(AddFriend)
  
  React.useEffect(() => {
    setFilteredFriends(Friends);
  }, [Friends]);
  async function  handleSearch(e) {
  const value = e.target.value;
  setQuery(value);

  if (value.length > 0) {
  await dispatch(getSearchRequest(e.target.value));
    const lowerValue = value.toLowerCase(); 
    const matchedFriends = Friends.filter(friend =>
      friend.userName.toLowerCase().includes(lowerValue)
    );
    setFilteredFriends(matchedFriends);
    const friendIds = new Set(Friends.map(f => f.friendId));
    const suggestedUsers = Users.filter(user =>
      user.userName.toLowerCase().includes(lowerValue) && !friendIds.has(user.friendId)
    )
    setAddFriend(suggestedUsers);
  } else {
    setFilteredFriends(Friends);
    setAddFriend([]);
  }
}
function handleAddFriend(id){

const updatedList = AddFriend.map(item =>
  item.userId === id
    ? { ...item, status: "Pending" }
    : item
);
setAddFriend(updatedList)
dispatch(sendRequest({requesterId:User.userId,
  addresseeId: id
}))
  
}

        return(
<div className="chatApp">
  <div>
    <input
      type="text"
      style={{ width: '100%', height: '20px' }}
      placeholder="Search..."
      onChange={handleSearch}
      value={query}
    />
  </div>

  <div
    className="item"
    style={{
      height: '500px',
      overflowY: 'auto',
      border: '1px solid #ccc',
      marginTop: '20px',
    }}
  >
    {filteredFriends &&
      filteredFriends.map((chat) => (
        <div
          key={chat.friendId}
          className="chatItem"
          style={{ borderBottom: '1px solid #ccc', padding: '10px' }}
        >
          <div
            className="text"
            style={{
              display: 'flex',
              alignItems: 'center',
              cursor: 'pointer',
              gap: '10px',
            }}
          >
            <img
              src={chat.imageUrl}
              alt="Profile"
              style={{ width: '50px', height: '50px', borderRadius: '50%' }}
            />
            <div
              style={{
                fontWeight: 'bold',
                fontSize: '16px',
                color: '#333',
              }}
              onClick={() => handleclick(chat)}
            >
              {chat.userName}
            </div>
          </div>
        </div>
      ))}

    {query.length > 0 &&
  AddFriend.map((user) => (
    <div
      key={user.friendId}
      className="chatItem"
      style={{ borderBottom: '1px solid #ccc', padding: '10px' }}
    >
      
      <div
        className="text"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          cursor: 'pointer',
          gap: '10px',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <img
            src={user.imageUrl}
            alt="Profile"
            style={{ width: '50px', height: '50px', borderRadius: '50%' }}
          />
          <div
            style={{
              fontWeight: 'bold',
              fontSize: '16px',
              color: '#333',
            }}
          >
            {user.userName}
          </div>
        </div>
{user.status==="Add Friend" && 
        <button
          onClick={() => handleAddFriend(user.userId)}
          style={{
            padding: '5px 10px',
            backgroundColor: '#007bff',
            color: '#fff',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
        >
          Add Friend
        </button>
}
{user.status === "Pending" && (
  <span style={{
    display: 'inline-block',
    padding: '5px 12px',
    fontSize: '14px',
    fontWeight: '500',
    color: '#92400e',             
    backgroundColor: '#fff7cc',  
    border: '1px solid #f0c36d',  
    borderRadius: '20px',
    marginTop: '5px'
  }}>
    Friend Request Sent
  </span>
)}

      </div>
    </div>
  ))}

  </div>
</div>


        
    )
}
export default ChatList; 























































