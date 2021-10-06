import React from 'react';
import { Link } from "react-router-dom";

//components
import AddButton from '../../../components/AddButton';

interface DirectMessagesProps {

}
const DirectMessages = ({ }: DirectMessagesProps) => {
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
                    <li>
                        <Link to="#">
                            <div className="d-flex align-items-center">
                                <div className="chat-user-img online align-self-center me-2 ms-0">
                                    <img src="assets/images/users/avatar-5.jpg" className="rounded-circle avatar-xs" alt="" />
                                    <span className="user-status"></span>
                                </div>
                                <div className="overflow-hidden">
                                    <p className="text-truncate mb-0">Nicholas Staten</p>
                                </div>
                            </div>
                        </Link>
                    </li>

                    <li>
                        <Link to="#">
                            <div className="d-flex align-items-center">
                                <div className="avatar-xs me-2">
                                    <span className="avatar-title rounded-circle bg-danger text-white">
                                        RL
                                    </span>
                                </div>
                                <div className="overflow-hidden">
                                    <p className="text-truncate mb-0">Robert Ledonne</p>
                                </div>
                            </div>
                        </Link>
                    </li>

                    <li className="active">
                        <Link to="#" className="unread-msg-user">
                            <div className="d-flex align-items-center">
                                <div className="chat-user-img online align-self-center me-2 ms-0">
                                    <img src="assets/images/users/avatar-7.jpg" className="rounded-circle avatar-xs" alt="" />
                                    <span className="user-status"></span>
                                </div>
                                <div className="overflow-hidden">
                                    <p className="text-truncate mb-0">Jean Berwick</p>
                                </div>
                                <div className="ms-auto">
                                    <span className="badge badge-soft-dark rounded p-1">05</span>
                                </div>
                            </div>
                        </Link>
                    </li>

                    <li>
                        <Link to="#">
                            <div className="d-flex align-items-center">
                                <div className="chat-user-img online align-self-center me-2 ms-0">
                                    <img src="assets/images/users/avatar-8.jpg" className="rounded-circle avatar-xs" alt="" />
                                    <span className="user-status"></span>
                                </div>
                                <div className="overflow-hidden">
                                    <p className="text-truncate mb-0">Jessica Lewis</p>
                                </div>
                            </div>
                        </Link>
                    </li>

                    <li>
                        <Link to="#">
                            <div className="d-flex align-items-center">
                                <div className="chat-user-img online align-self-center me-2 ms-0">
                                    <img src="assets/images/users/avatar-9.jpg" className="rounded-circle avatar-xs" alt="" />
                                    <span className="user-status"></span>
                                </div>
                                <div className="overflow-hidden">
                                    <p className="text-truncate mb-0">John Foss</p>
                                </div>
                            </div>
                        </Link>
                    </li>

                    <li>
                        <Link to="#">
                            <div className="d-flex align-items-center">
                                <div className="chat-user-img online align-self-center me-2 ms-0">
                                    <img src="assets/images/users/avatar-10.jpg" className="rounded-circle avatar-xs" alt="" />
                                    <span className="user-status"></span>
                                </div>
                                <div className="overflow-hidden">
                                    <p className="text-truncate mb-0">Gloria Underhill</p>
                                </div>
                            </div>
                        </Link>
                    </li>

                </ul>
            </div>
        </>
    );
};

export default DirectMessages;