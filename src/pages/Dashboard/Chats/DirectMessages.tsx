import React from 'react';

//components
import AddButton from '../../../components/AddButton';

// interface
import { UserTypes } from "../../../data/chat";

// component
import ChatUser from "./ChatUser";

interface DirectMessagesProps {
    users: Array<UserTypes>;
}
const DirectMessages = ({ users }: DirectMessagesProps) => {
    return (
        <>
            <div className="d-flex align-items-center px-4 mt-5 mb-2">
                <div className="flex-grow-1">
                    <h4 className="mb-0 font-size-11 text-muted text-uppercase">Direct Messages</h4>
                </div>
                <div className="flex-shrink-0">
                    <div data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="bottom" title="New Message">

                        {/* Button trigger modal */}
                        <AddButton onClick={() => { }} /> {/* contactModal */}

                    </div>
                </div>
            </div>

            <div className="chat-message-list">

                <ul className="list-unstyled chat-list chat-user-list">
                    {
                        (users || []).map((user: UserTypes, key: number) =>
                            <ChatUser user={user} key={key} />
                        )
                    }
                </ul>
            </div>
        </>
    );
};

export default DirectMessages;