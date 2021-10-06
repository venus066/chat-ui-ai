import React from 'react';
import { Link } from "react-router-dom";

interface ChatUserProps {

}
const ChatUser = (ChatUser: ChatUserProps) => {
    return (
        <li>
            <Link to="#" className="unread-msg-user">
                <div className="d-flex align-items-center">
                    <div className="chat-user-img online align-self-center me-2 ms-0">
                        <img src="assets/images/users/avatar-2.jpg" className="rounded-circle avatar-xs" alt="" />
                        <span className="user-status"></span>
                    </div>
                    <div className="overflow-hidden">
                        <p className="text-truncate mb-0">Patrick Hendricks</p>
                    </div>
                    <div className="ms-auto">
                        <span className="badge badge-soft-dark rounded p-1">03</span>
                    </div>
                </div>
            </Link>
        </li>
    );
};

export default ChatUser;