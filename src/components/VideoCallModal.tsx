import React from 'react';

const VideoCall = () => {
    return (
        <div className="modal fade videocallModal" tabIndex={-1} aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content shadow-lg border-0">
                    <div className="modal-body p-0">
                        <img src="assets/images/users/avatar-7.jpg" alt="" className="videocallModal-bg" />
                        <div className="position-absolute start-0 end-0 bottom-0">
                            <div className="text-center">
                                <div className="d-flex justify-content-center align-items-center text-center">
                                    <div className="avatar-md h-auto">
                                        <button type="button" className="btn btn-light avatar-sm rounded-circle">
                                            <span className="avatar-title bg-transparent text-muted font-size-20">
                                                <i className="bx bx-microphone-off"></i>
                                            </span>
                                        </button>
                                    </div>
                                    <div className="avatar-md h-auto">
                                        <button type="button" className="btn btn-light avatar-sm rounded-circle">
                                            <span className="avatar-title bg-transparent text-muted font-size-20">
                                                <i className="bx bx-volume-full"></i>
                                            </span>
                                        </button>
                                    </div>
                                    <div className="avatar-md h-auto">
                                        <button type="button" className="btn btn-light avatar-sm rounded-circle">
                                            <span className="avatar-title bg-transparent text-muted font-size-20">
                                                <i className="bx bx-video-off"></i>
                                            </span>
                                        </button>
                                    </div>
                                    <div className="avatar-md h-auto">
                                        <button type="button" className="btn btn-light avatar-sm rounded-circle">
                                            <span className="avatar-title bg-transparent text-muted font-size-20">
                                                <i className="bx bx-refresh"></i>
                                            </span>
                                        </button>
                                    </div>
                                </div>

                                <div className="mt-4">
                                    <button type="button" className="btn btn-danger avatar-md call-close-btn rounded-circle" data-bs-dismiss="modal">
                                        <span className="avatar-title bg-transparent font-size-24">
                                            <i className="mdi mdi-phone-hangup"></i>
                                        </span>
                                    </button>
                                </div>
                            </div>

                            <div className="p-4 bg-primary mt-n4">
                                <div className="text-white mt-4 text-center">
                                    <h5 className="font-size-18 text-truncate mb-0 text-white">Jean Berwick</h5>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default VideoCall;