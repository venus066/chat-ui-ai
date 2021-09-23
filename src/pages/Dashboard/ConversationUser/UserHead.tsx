import React from 'react';

const UserHead = () => {
    return (
        <div className="p-3 p-lg-4 user-chat-topbar">
            <div className="row align-items-center">
                <div className="col-sm-4 col-8">
                    <div className="d-flex align-items-center">
                        <div className="flex-shrink-0 d-block d-lg-none me-2">
                            <a href="javascript: void(0);" className="user-chat-remove text-muted font-size-24 p-2"><i className="bx bx-chevron-left align-middle"></i></a>
                        </div>
                        <div className="flex-grow-1 overflow-hidden">
                            <div className="d-flex align-items-center">
                                <div className="flex-shrink-0 chat-user-img online align-self-center me-3 ms-0">
                                    <img src="assets/images/users/avatar-7.jpg" className="rounded-circle avatar-sm" alt="" />
                                    <span className="user-status"></span>
                                </div>
                                <div className="flex-grow-1 overflow-hidden">
                                    <h6 className="text-truncate mb-0 font-size-18"><a href="#" className="user-profile-show text-reset">Jean Berwick</a></h6>
                                    <p className="text-truncate text-muted mb-0"><small>Online</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-8 col-4">
                    <ul className="list-inline user-chat-nav text-end mb-0">
                        <li className="list-inline-item">
                            <div className="dropdown">
                                <button className="btn nav-btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <i className='bx bx-search'></i>
                                </button>
                                <div className="dropdown-menu p-0 dropdown-menu-end dropdown-menu-lg">
                                    <div className="search-box p-2">
                                        <input type="text" className="form-control" placeholder="Search.." />
                                    </div>
                                </div>
                            </div>
                        </li>

                        <li className="list-inline-item d-none d-lg-inline-block me-2 ms-0">
                            <button type="button" className="btn nav-btn" data-bs-toggle="modal" data-bs-target=".audiocallModal">
                                <i className='bx bxs-phone-call' ></i>
                            </button>
                        </li>

                        <li className="list-inline-item d-none d-lg-inline-block me-2 ms-0">
                            <button type="button" className="btn nav-btn" data-bs-toggle="modal" data-bs-target=".videocallModal">
                                <i className='bx bx-video' ></i>
                            </button>
                        </li>

                        <li className="list-inline-item d-none d-lg-inline-block me-2 ms-0">
                            <button type="button" className="btn nav-btn user-profile-show">
                                <i className='bx bxs-info-circle' ></i>
                            </button>
                        </li>

                        <li className="list-inline-item">
                            <div className="dropdown">
                                <button className="btn nav-btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <i className='bx bx-dots-vertical-rounded' ></i>
                                </button>
                                <div className="dropdown-menu dropdown-menu-end">
                                    <a className="dropdown-item d-flex justify-content-between align-items-center d-lg-none user-profile-show" href="#">View Profile <i className="bx bx-user text-muted"></i></a>
                                    <a className="dropdown-item d-flex justify-content-between align-items-center d-lg-none" href="#" data-bs-toggle="modal" data-bs-target=".audiocallModal">Audio <i className="bx bxs-phone-call text-muted"></i></a>
                                    <a className="dropdown-item d-flex justify-content-between align-items-center d-lg-none" href="#" data-bs-toggle="modal" data-bs-target=".videocallModal">Video <i className="bx bx-video text-muted"></i></a>
                                    <a className="dropdown-item d-flex justify-content-between align-items-center" href="#">Archive <i className="bx bx-archive text-muted"></i></a>
                                    <a className="dropdown-item d-flex justify-content-between align-items-center" href="#">Muted <i className="bx bx-microphone-off text-muted"></i></a>
                                    <a className="dropdown-item d-flex justify-content-between align-items-center" href="#">Delete <i className="bx bx-trash text-muted"></i></a>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="alert alert-warning alert-dismissible topbar-bookmark fade show p-1 px-3 px-lg-4 pe-lg-5 pe-5" role="alert">
                <div className="d-flex align-items-start bookmark-tabs">
                    <div className="tab-list-link">
                        <a href="#" className="tab-links" data-bs-toggle="modal" data-bs-target=".pinnedtabModal"><i className="ri-pushpin-fill align-middle me-1"></i> 10 Pinned</a>
                    </div>
                    <div>
                        <a href="#" className="tab-links border-0 px-3" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="bottom" title="Add Bookmark"><i className="ri-add-fill align-middle"></i></a>
                    </div>
                </div>
                <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
        </div>
    );
};

export default UserHead;