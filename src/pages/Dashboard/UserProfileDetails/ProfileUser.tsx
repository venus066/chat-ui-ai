import React from 'react';
import { Link } from "react-router-dom";

interface ProfileUserProps {
    onCloseUserDetails: () => any;
    chatUserDetails: any;
}
const ProfileUser = ({ onCloseUserDetails, chatUserDetails }: ProfileUserProps) => {
    return (
        <div className="p-3 border-bottom">
            <div className="user-profile-img">
                <img
                    src="assets/images/users/avatar-7.jpg"
                    className="profile-img rounded"
                    alt=""
                />
                <div className="overlay-content rounded">
                    <div className="user-chat-nav p-2">
                        <div className="d-flex w-100">
                            <div className="flex-grow-1">
                                <button
                                    type="button"
                                    className="btn nav-btn text-white user-profile-show d-none d-lg-block"
                                    onClick={onCloseUserDetails}
                                >
                                    <i className="bx bx-x"></i>
                                </button>
                                <button
                                    type="button"
                                    className="btn nav-btn text-white user-profile-show d-block d-lg-none"
                                >
                                    <i className="bx bx-left-arrow-alt"></i>
                                </button>
                            </div>
                            <div className="flex-shrink-0">
                                <div className="dropdown">
                                    <button
                                        className="btn nav-btn text-white dropdown-toggle"
                                        type="button"
                                        data-bs-toggle="dropdown"
                                        aria-haspopup="true"
                                        aria-expanded="false"
                                    >
                                        <i className="bx bx-dots-vertical-rounded"></i>
                                    </button>
                                    <div className="dropdown-menu dropdown-menu-end">
                                        <Link
                                            className="dropdown-item d-flex justify-content-between align-items-center d-lg-none user-profile-show"
                                            to="#"
                                        >
                                            View Profile <i className="bx bx-user text-muted"></i>
                                        </Link>
                                        <Link
                                            className="dropdown-item d-flex justify-content-between align-items-center d-lg-none"
                                            to="#"
                                            data-bs-toggle="modal"
                                            data-bs-target=".audiocallModal"
                                        >
                                            Audio <i className="bx bxs-phone-call text-muted"></i>
                                        </Link>
                                        <Link
                                            className="dropdown-item d-flex justify-content-between align-items-center d-lg-none"
                                            to="#"
                                            data-bs-toggle="modal"
                                            data-bs-target=".videocallModal"
                                        >
                                            Video <i className="bx bx-video text-muted"></i>
                                        </Link>
                                        <Link
                                            className="dropdown-item d-flex justify-content-between align-items-center"
                                            to="#"
                                        >
                                            Archive <i className="bx bx-archive text-muted"></i>
                                        </Link>
                                        <Link
                                            className="dropdown-item d-flex justify-content-between align-items-center"
                                            to="#"
                                        >
                                            Muted{" "}
                                            <i className="bx bx-microphone-off text-muted"></i>
                                        </Link>
                                        <Link
                                            className="dropdown-item d-flex justify-content-between align-items-center"
                                            to="#"
                                        >
                                            Delete <i className="bx bx-trash text-muted"></i>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-auto p-3">
                        <h5 className="user-name mb-1 text-truncate">Jean Berwick</h5>
                        <p className="font-size-14 text-truncate mb-0">
                            <i className="bx bxs-circle font-size-10 text-success me-1 ms-0"></i>{" "}
                            Online
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileUser;