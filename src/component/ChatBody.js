import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom"
import ChatBar from './ChatBar'
import ChatFooter from './ChatFooter'

const ChatBody = ({ messages, socket }) => {
    const navigate = useNavigate()
    const handleLeaveChat = () => {
        localStorage.removeItem("userName")
        navigate("/")
        window.location.reload()
    }

    return (
        <>
            <body>
                <div id="snippetContent">
                    <div class="container">
                        <div class="row clearfix">
                            <div class="col-lg-12">
                                <div class="card chat-app">
                                    <ChatBar socket={socket} />
                                    {/* <Plist/> */}
                                    <div class="chat">
                                        <div class="chat-header clearfix">
                                            <div class="row">
                                                <div class="col-6 text-center mt-2">
                                                    OPEN CHAT BOX
                                                </div>
                                                <div class="col-6 text-right">
                                                    <button className='btn btn-danger' onClick={handleLeaveChat}>LEAVE CHAT</button>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="chat-history">
                                            <ul class="m-b-0">

                                                {
                                                    messages.map((message) => {
                                                        return (
                                                            message.name === localStorage.getItem("userName") ?
                                                                <>
                                                                    <li class="clearfix">
                                                                        <div class="message-data text-right"> <span class="message-data-time">{message.time}</span> <img
                                                                            src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="avatar" />
                                                                            <div>You</div>
                                                                        </div>
                                                                        <div class="message other-message float-right">{message.text}</div>
                                                                    </li>
                                                                </>
                                                                :
                                                                <>
                                                                    <li class="clearfix">
                                                                        <div class="message-data"><img
                                                                            src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="avatar" /> <span class="message-data-time">{message.time}</span></div>
                                                                        <div>{message.name}</div>
                                                                        <div class="message my-message">{message.text}</div>
                                                                    </li>

                                                                </>
                                                        )
                                                    })
                                                }
                                            </ul>
                                        </div>
                                        <ChatFooter socket={socket} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <script type="text/javascript"></script>
                </div>
            </body>
        </>

    )
}

export default ChatBody