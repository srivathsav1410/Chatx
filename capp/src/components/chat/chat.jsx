import './chat.css';
const Chat = () => {
    return (
        <div className='chat'>
            <div className='top'>
                <div className='user'>
                    <div className="texts">
                        <span>Joe Doe</span>
                        <p>Last seen today at 12.00pm</p>
                    </div>
                </div>
            </div>
           <div className='center'>
            <div className='message owner'>
            <p>Hello World Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet ab a sunt quo vitae porro voluptatum ducimus atque odio mollitia nesciunt, laudantium fugit labore quia quis illum libero molestiae asperiores.</p>
            </div>
            <div className='message sender'>
                <p>hi am sender messages</p>
            </div>
</div>
            <div className='bottom'>
                <textarea placeholder='Type a message' ></textarea>
                <button>Send</button>
            </div>
        </div>
    );
};
export default Chat;