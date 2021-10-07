import React from 'react';
import { Link } from "react-router-dom";
import classnames from "classnames";

// components
import AddButton from '../../../components/AddButton';

// interface
import { ChannelTypes } from "../../../data/chat";

interface ChannelProps {
    channel: ChannelTypes;
}
const Channel = ({ channel }: ChannelProps) => {
    const unRead = channel.meta && channel.meta.unRead;
    return (
        <li>
            <Link to="#" className={classnames({ "unread-msg-user": unRead })}>
                <div className="d-flex align-items-center">
                    <div className="flex-shrink-0 avatar-xs me-2">
                        <span className="avatar-title rounded-circle bg-soft-light text-dark">
                            #
                        </span>
                    </div>
                    <div className="flex-grow-1 overflow-hidden">
                        <p className="text-truncate mb-0">{channel.name}</p>
                    </div>
                    {
                        unRead &&
                        <div className="flex-shrink-0 ms-2">
                            <span className="badge badge-soft-dark rounded p-1">{unRead}</span>
                        </div>
                    }

                </div>
            </Link>
        </li>
    );
};
interface ChanelsProps {
    channels: Array<ChannelTypes>;
}
const Chanels = ({ channels }: ChanelsProps) => {
    return (
        <>
            <div className="d-flex align-items-center px-4 mt-5 mb-2">
                <div className="flex-grow-1">
                    <h4 className="mb-0 font-size-11 text-muted text-uppercase">Channels</h4>
                </div>
                <div className="flex-shrink-0">
                    <div data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="bottom" title="Create group">

                        {/* Button trigger modal */}
                        <AddButton onClick={() => { }} /> {/* addgroup-exampleModal */}
                    </div>
                </div>
            </div>

            <div className="chat-message-list">

                <ul className="list-unstyled chat-list chat-user-list mb-3">
                    {
                        (channels || []).map((channel: ChannelTypes, key: number) =>
                            <Channel channel={channel} key={key} />
                        )
                    }
                </ul>
            </div>
        </>
    );
};

export default Chanels;