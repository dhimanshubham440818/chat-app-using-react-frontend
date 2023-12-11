import React, { useState, useEffect } from 'react'
const ChatBar = ({ socket }) => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        socket.on("newUserResponse", data => setUsers(data))
    }, [socket, users])

    return (
        <div>
            <div id="plist" class="people-list">

                <ul class="list-unstyled chat-list mt-2 mb-0">
                    {
                        users.map((user) => {
                            return (
                                <li class="clearfix"> <img src="https://bootdey.com/img/Content/avatar/avatar1.png"
                                    alt="avatar" />
                                    <div class="about">
                                        <div class="name">{user.userName}</div>
                                        <div class="status"> <i class="fa fa-circle offline"></i> left 7 mins ago</div>
                                    </div>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    )
}

export default ChatBar;