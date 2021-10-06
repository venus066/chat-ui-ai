import React from 'react';
import { Link } from "react-router-dom";

// components
import AddButton from '../../../components/AddButton';

interface ChanelsProps {

}
const Chanels = ({ }: ChanelsProps) => {
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
                    <li>
                        <Link to="#" className="unread-msg-user">
                            <div className="d-flex align-items-center">
                                <div className="flex-shrink-0 avatar-xs me-2">
                                    <span className="avatar-title rounded-circle bg-soft-light text-dark">
                                        #
                                    </span>
                                </div>
                                <div className="flex-grow-1 overflow-hidden">
                                    <p className="text-truncate mb-0">Landing Design</p>
                                </div>
                                <div className="flex-shrink-0 ms-2">
                                    <span className="badge badge-soft-dark rounded p-1">12</span>
                                </div>
                            </div>
                        </Link>
                    </li>

                    <li>
                        <Link to="#">
                            <div className="d-flex align-items-center">
                                <div className="flex-shrink-0 avatar-xs me-2">
                                    <span className="avatar-title rounded-circle bg-soft-light text-dark">
                                        #
                                    </span>
                                </div>
                                <div className="flex-grow-1 overflow-hidden">
                                    <p className="text-truncate mb-0">Design Phase 2</p>
                                </div>
                            </div>
                        </Link>
                    </li>

                    <li>
                        <Link to="#" className="unread-msg-user">
                            <div className="d-flex align-items-center">
                                <div className="flex-shrink-0 avatar-xs me-2">
                                    <span className="avatar-title rounded-circle bg-soft-light text-dark">
                                        #
                                    </span>
                                </div>
                                <div className="flex-grow-1 overflow-hidden">
                                    <p className="text-truncate mb-0">Brand Suggestion</p>
                                </div>
                                <div className="flex-shrink-0 ms-2">
                                    <span className="badge badge-soft-dark rounded p-1">85</span>
                                </div>
                            </div>
                        </Link>
                    </li>

                    <li>
                        <Link to="#">
                            <div className="d-flex align-items-center">
                                <div className="flex-shrink-0 avatar-xs me-2">
                                    <span className="avatar-title rounded-circle bg-light text-dark">
                                        #
                                    </span>
                                </div>
                                <div className="flex-grow-1 overflow-hidden">
                                    <p className="text-truncate mb-0">Reporting</p>
                                </div>
                            </div>
                        </Link>
                    </li>
                </ul>
            </div>
        </>
    );
};

export default Chanels;