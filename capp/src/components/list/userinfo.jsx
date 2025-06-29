import * as React from 'react';
import { FiLogOut } from 'react-icons/fi'; // Logout icon

import { sendImage } from '../../features/chat/chatslice';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import './userinfo.css';
import { useNavigate } from 'react-router-dom';
import { logout } from '../../features/auth/authslice';
import NotificationDropdown from "./notificationdropdown"

const UserInfo=()=>{  
    const dispatch = useDispatch();
      const navigate = useNavigate();

    
    const { User } = useSelector((state) => state.auth);
    console.log(User)
     const fileInputRef = React.useRef(null);
  const [image, setImage] = React.useState(
    'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'
  );
  const [showDialog, setShowDialog] = React.useState(false);

  const handleAvatarClick = () => {
    setShowDialog(true);
  };

  const handleChangeClick = () => {
    fileInputRef.current.click();
  };

  const handleLogout = () => {  
dispatch(logout());
navigate('/'); 
  }
    
      const  handleImageChange  = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const formData = new FormData();
        formData.append("image", file);
        formData.append("userId",User.userId);
       dispatch(sendImage({formData:formData,userId:User.userId}));   
        setImage(reader.result);
        setShowDialog(false);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleCloseDialog = () => {
    setShowDialog(false);
  };


   return(
        <div className="userinfo">
   <div
           onClick={handleAvatarClick}

  className="avatar"
  style={{
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    overflow: 'hidden',
  }}
>
  <img
    src="https://chatappx.blob.core.windows.net/avatars/1.jpg"
     
    alt="Profile"
    style={{
      width: '100%',
      height: '100%',
      objectFit: 'cover', 
    }}
  />
</div>
            <div className='user' style={{ fontSize: '25px' }}>
            ChatX
             </div>

            <div className='icons' style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
<FiLogOut size={20} onClick={handleLogout} style={{ cursor: 'pointer' }} />
<NotificationDropdown/>

            </div>
         
       {showDialog && (
        <div
          style={{
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)', 
          }}
        >
          <div
            style={{
              backgroundColor: '#fff',
              padding: '20px',
              borderRadius: '8px',
              width: '300px',
              textAlign: 'center',
            }}
          >
            <h3>Change Profile Picture</h3>
            <img
              src={image}
              alt="Preview"
              style={{
                width: '100px',
                height: '100px',
                borderRadius: '50%',
                objectFit: 'cover',
                marginBottom: '10px',
              }}
            />
            <br />
            <button onClick={handleChangeClick}>Choose New Image</button>
            <br /><br />
            <button onClick={handleCloseDialog}>Cancel</button>
          </div>
        </div>
      )}
      <input
        type="file"
        accept="image/*"
        ref={fileInputRef}
        onChange={handleImageChange}
        style={{ display: 'none' }} 
      />
    
        </div>
    )
}
export default UserInfo;