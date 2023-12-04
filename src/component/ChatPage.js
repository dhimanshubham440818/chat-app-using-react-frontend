import React, { useEffect, useState } from 'react'
import ChatBody from './ChatBody'

const ChatPage = ({ socket }) => {
  const [messages, setMessages] = useState([])
  useEffect(() => {
    socket.on("messageResponse", data => setMessages([...messages, data]))
  }, [socket, messages])

  return (
    <div className="chat">
      <div className='chat__main'>
        <ChatBody socket={socket} messages={messages} />
      </div>
    </div>
  )
}

export default ChatPage