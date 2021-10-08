import React from 'react';
import { Link } from "react-router-dom";

interface AttachedFilesProps {
    chatUserDetails: any;
}
const AttachedFiles = ({ chatUserDetails }: AttachedFilesProps) => {
    return (
        <div className="text-center border-bottom">
            <div className="row">
                <div className="col-sm col-4">
                    <div className="mb-4">
                        <button type="button" className="btn avatar-sm p-0">
                            <span className="avatar-title rounded bg-light text-body">
                                <i className="bx bxs-message-alt-detail"></i>
                            </span>
                        </button>
                        <h5 className="font-size-11 text-uppercase text-muted mt-2">
                            Message
                        </h5>
                    </div>
                </div>
                <div className="col-sm col-4">
                    <div className="mb-4">
                        <button
                            type="button"
                            className="btn avatar-sm p-0 favourite-btn"
                        >
                            <span className="avatar-title rounded bg-light text-body">
                                <i className="bx bx-heart"></i>
                            </span>
                        </button>
                        <h5 className="font-size-11 text-uppercase text-muted mt-2">
                            Favourite
                        </h5>
                    </div>
                </div>
                <div className="col-sm col-4">
                    <div className="mb-4">
                        <button
                            type="button"
                            className="btn avatar-sm p-0"
                            data-bs-toggle="modal"
                            data-bs-target=".audiocallModal"
                        >
                            <span className="avatar-title rounded bg-light text-body">
                                <i className="bx bxs-phone-call"></i>
                            </span>
                        </button>
                        <h5 className="font-size-11 text-uppercase text-muted mt-2">
                            Audio
                        </h5>
                    </div>
                </div>
                <div className="col-sm col-4">
                    <div className="mb-4">
                        <button
                            type="button"
                            className="btn avatar-sm p-0"
                            data-bs-toggle="modal"
                            data-bs-target=".videocallModal"
                        >
                            <span className="avatar-title rounded bg-light text-body">
                                <i className="bx bx-video"></i>
                            </span>
                        </button>
                        <h5 className="font-size-11 text-uppercase text-muted mt-2">
                            Video
                        </h5>
                    </div>
                </div>
                <div className="col-sm col-4">
                    <div className="mb-4">
                        <div className="dropdown">
                            <button
                                className="btn avatar-sm p-0 dropdown-toggle"
                                type="button"
                                data-bs-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                            >
                                <span className="avatar-title bg-light text-body rounded">
                                    <i className="bx bx-dots-horizontal-rounded"></i>
                                </span>
                            </button>

                            <div className="dropdown-menu dropdown-menu-end">
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
                        <h5 className="font-size-11 text-uppercase text-muted mt-2">
                            More
                        </h5>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AttachedFiles;