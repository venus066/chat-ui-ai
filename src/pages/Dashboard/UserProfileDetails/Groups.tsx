import React from 'react';
import { Link } from "react-router-dom";

interface GroupsProps {
    chatUserDetails: any;
}
const Groups = ({ chatUserDetails }: GroupsProps) => {
    return (
        <div>
            <div className="d-flex">
                <div className="flex-grow-1">
                    <h5 className="font-size-11 text-muted text-uppercase">
                        Group in common
                    </h5>
                </div>
            </div>

            <ul className="list-unstyled chat-list mx-n4">
                <li>
                    <Link to="#">
                        <div className="d-flex align-items-center">
                            <div className="flex-shrink-0 avatar-xs me-2">
                                <span className="avatar-title rounded-circle bg-soft-light text-dark">
                                    #
                                </span>
                            </div>
                            <div className="flex-grow-1 overflow-hidden">
                                <p className="text-truncate mb-0">Landing Design</p>
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
            </ul>
        </div>
    );
};

export default Groups;