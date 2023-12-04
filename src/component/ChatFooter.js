import React, { useEffect, useState } from 'react'

const ChatFooter = ({ socket }) => {
    const [message, setMessage] = useState("")
    const [typingStatus, setTypingStatus] = useState('');

    const handleTyping = () => socket.emit("typing", `${localStorage.getItem("userName")} is typing`)
    const handleTypingExit = () => socket.emit("typing", '');

    useEffect(() => {
        socket.on('typingResponse', (data) => {
            setTypingStatus(data)
        }
        );
    }, [socket]);

    const handleSendMessage = (e) => {
        e.preventDefault()
        if (message.trim() && localStorage.getItem("userName")) {
            socket.emit("message",
                {
                    text: message,
                    name: localStorage.getItem("userName"),
                    id: `${socket.id}${Math.random()}`,
                    socketID: socket.id
                }
            )
        }
        setMessage("")
    }
    return (
        <div>
            <div className='ml-4'>{typingStatus}</div>
            <form onSubmit={handleSendMessage}>
                <div class="chat-message clearfix">
                    <div class="input-group mb-0">
                        <div class="input-group-prepend"></div> <input
                            type    ="text"
                            class="form-control" placeholder="Enter text here..."
                            value={message}
                            onChange={e => setMessage(e.target.value)}
                            onKeyDown={handleTyping}
                            onBlur={handleTypingExit}
                        />
                        <button type='submit' className='btn btn-primary'>Send</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default ChatFooter