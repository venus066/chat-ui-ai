import React from 'react';
import { Link } from "react-router-dom";

interface FavouritesProps {
    favourites: Array<any>;
}
const Favourites = ({ favourites }: FavouritesProps) => {
    return (
        <>
            <h5 className="mb-3 px-4 mt-4 font-size-11 text-muted text-uppercase">Favourites</h5>

            <div className="chat-message-list">

                <ul className="list-unstyled chat-list chat-user-list">
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

                    <li>
                        <Link to="#">
                            <div className="d-flex align-items-center">
                                <div className="chat-user-img online align-self-center me-2 ms-0">
                                    <img src="assets/images/users/avatar-5.jpg" className="rounded-circle avatar-xs" alt="" />
                                    <span className="user-status"></span>
                                </div>
                                <div className="overflow-hidden">
                                    <p className="text-truncate mb-0">Steven Jury</p>
                                </div>
                            </div>
                        </Link>
                    </li>

                    <li>
                        <Link to="#">
                            <div className="d-flex align-items-center">
                                <div className="avatar-xs me-2">
                                    <span className="avatar-title rounded-circle bg-primary text-white">
                                        JP
                                    </span>
                                </div>
                                <div className="overflow-hidden">
                                    <p className="text-truncate mb-0">James Pinard</p>
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
                                    <p className="text-truncate mb-0">Brian Cote</p>
                                </div>
                            </div>
                        </Link>
                    </li>
                </ul>
            </div>
        </>
    );
};

export default Favourites;