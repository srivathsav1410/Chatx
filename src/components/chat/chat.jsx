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
                <div className='message own'>
                        <p>
                            qweqdsssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrsqehwhruwheruwrhuhreu
                        </p>
                    </div>
                    <div className='message'>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.
                        </p>
                    </div>
                    <div className='message own'>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.
                        </p>
            </div>
            </div>
            <div className='bottom'>
                <div className='input'>
                    <textarea  id="message" name="message" rows="4" cols="120" placeholder="Type your message..." type="text" />
                    <button style={{ backgroundColor: '#007bff', color: 'white', padding: '10px 20px', border:'none' ,borderRadius: '5px', cursor: 'pointer' }}>
  Send
</button>
                </div>
            </div>
        </div>
    );
};
export default Chat;