
import chatBg from '../../assets/chatbackground.png'; // adjust path as needed
import './chatimage.css'; // adjust path as needed
const ChatImage=()=>{
    return(
        <div className="chat-image">
            <img src={chatBg} alt="Chat Image" />
        </div>
    )
}
export default ChatImage;