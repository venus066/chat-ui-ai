import React, { useState } from 'react';
import { Link } from "react-router-dom";
import classnames from "classnames";

// interface
import { UserTypes } from "../../../data/chat";
import { STATUS_TYPES } from '../../../constants';

interface ChatUserProps {
    user: UserTypes;
}
const ChatUser = ({ user }: ChatUserProps) => {
    const fullName = `${user.firstName} ${user.lastName}`;
    const shortName = `${user.firstName.charAt(0)}${user.lastName.charAt(
        0
    )}`;

    const colors = [
        "bg-primary",
        "bg-danger",
        "bg-info",
        "bg-warning",
        "bg-secondary",
        "bg-pink",
        "bg-purple",
    ];
    const [color] = useState(Math.floor(Math.random() * colors.length));
    const isOnline = user.meta && user.meta.status === STATUS_TYPES.ACTIVE;
    const unRead = user.meta && user.meta.unRead;

    return (
        <li>
            <Link to="#" className={classnames({ "unread-msg-user": unRead })}>
                <div className="d-flex align-items-center">
                    {
                        user.profileImage ?
                            <div className={classnames("chat-user-img", "align-self-center", "me-2", "ms-0",
                                { "online": isOnline })}>
                                <img src={user.profileImage} className="rounded-circle avatar-xs" alt="" />
                                {
                                    isOnline && <span className="user-status"></span>
                                }

                            </div>
                            :
                            <div className="avatar-xs me-2">
                                <span
                                    className={classnames(
                                        "avatar-title",
                                        "rounded-circle",
                                        "text-uppercase",
                                        "text-white",
                                        colors[color]
                                    )}
                                >
                                    {shortName}
                                </span>
                            </div>
                    }
                    <div className="overflow-hidden">
                        <p className="text-truncate mb-0">{fullName}</p>
                    </div>
                    {
                        unRead &&
                        <div className="ms-auto">
                            <span className="badge badge-soft-dark rounded p-1">{unRead}</span>
                        </div>
                    }
                </div>
            </Link>
        </li>
    );
};

export default ChatUser;