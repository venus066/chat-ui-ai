import React from 'react';

const UserProfileDetails = () => {
    return (
        <>
            <div className="user-profile-sidebar">
                <div className="p-3 border-bottom">
                    <div className="user-profile-img">
                        <img src="assets/images/users/avatar-7.jpg" className="profile-img rounded" alt="" />
                        <div className="overlay-content rounded">
                            <div className="user-chat-nav p-2">
                                <div className="d-flex w-100">
                                    <div className="flex-grow-1">
                                        <button type="button" className="btn nav-btn text-white user-profile-show d-none d-lg-block">
                                            <i className="bx bx-x"></i>
                                        </button>
                                        <button type="button" className="btn nav-btn text-white user-profile-show d-block d-lg-none">
                                            <i className="bx bx-left-arrow-alt"></i>
                                        </button>
                                    </div>
                                    <div className="flex-shrink-0">
                                        <div className="dropdown">
                                            <button className="btn nav-btn text-white dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                <i className='bx bx-dots-vertical-rounded'></i>
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
                                    </div>
                                </div>
                            </div>
                            <div className="mt-auto p-3">
                                <h5 className="user-name mb-1 text-truncate">Jean Berwick</h5>
                                <p className="font-size-14 text-truncate mb-0"><i className="bx bxs-circle font-size-10 text-success me-1 ms-0"></i> Online</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- End profile user --> */}

                {/* <!-- Start user-profile-desc --> */}
                <div className="p-4 user-profile-desc" > {/* simplebar */}

                    <div className="text-center border-bottom">
                        <div className="row">
                            <div className="col-sm col-4">
                                <div className="mb-4">
                                    <button type="button" className="btn avatar-sm p-0">
                                        <span className="avatar-title rounded bg-light text-body">
                                            <i className="bx bxs-message-alt-detail"></i>
                                        </span>
                                    </button>
                                    <h5 className="font-size-11 text-uppercase text-muted mt-2">Message</h5>
                                </div>
                            </div>
                            <div className="col-sm col-4">
                                <div className="mb-4">
                                    <button type="button" className="btn avatar-sm p-0 favourite-btn">
                                        <span className="avatar-title rounded bg-light text-body">
                                            <i className="bx bx-heart"></i>
                                        </span>
                                    </button>
                                    <h5 className="font-size-11 text-uppercase text-muted mt-2">Favourite</h5>
                                </div>
                            </div>
                            <div className="col-sm col-4">
                                <div className="mb-4">
                                    <button type="button" className="btn avatar-sm p-0" data-bs-toggle="modal" data-bs-target=".audiocallModal">
                                        <span className="avatar-title rounded bg-light text-body">
                                            <i className="bx bxs-phone-call"></i>
                                        </span>
                                    </button>
                                    <h5 className="font-size-11 text-uppercase text-muted mt-2">Audio</h5>
                                </div>
                            </div>
                            <div className="col-sm col-4">
                                <div className="mb-4">
                                    <button type="button" className="btn avatar-sm p-0" data-bs-toggle="modal" data-bs-target=".videocallModal">
                                        <span className="avatar-title rounded bg-light text-body">
                                            <i className="bx bx-video"></i>
                                        </span>
                                    </button>
                                    <h5 className="font-size-11 text-uppercase text-muted mt-2">Video</h5>
                                </div>
                            </div>
                            <div className="col-sm col-4">
                                <div className="mb-4">
                                    <div className="dropdown">
                                        <button className="btn avatar-sm p-0 dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <span className="avatar-title bg-light text-body rounded">
                                                <i className='bx bx-dots-horizontal-rounded'></i>
                                            </span>
                                        </button>

                                        <div className="dropdown-menu dropdown-menu-end">
                                            <a className="dropdown-item d-flex justify-content-between align-items-center" href="#">Archive <i className="bx bx-archive text-muted"></i></a>
                                            <a className="dropdown-item d-flex justify-content-between align-items-center" href="#">Muted <i className="bx bx-microphone-off text-muted"></i></a>
                                            <a className="dropdown-item d-flex justify-content-between align-items-center" href="#">Delete <i className="bx bx-trash text-muted"></i></a>
                                        </div>
                                    </div>
                                    <h5 className="font-size-11 text-uppercase text-muted mt-2">More</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="text-muted pt-4">
                        <h5 className="font-size-11 text-uppercase">Status :</h5>
                        <p className="mb-4">If several languages coalesce, the grammar of the resulting.</p>
                    </div>

                    <div className="pb-2">
                        <h5 className="font-size-11 text-uppercase mb-2">Info :</h5>
                        <div>
                            <div className="d-flex align-items-end">
                                <div className="flex-grow-1">
                                    <p className="text-muted font-size-14 mb-1">Name</p>
                                </div>
                                <div className="flex-shrink-0">
                                    <button type="button" className="btn btn-sm btn-soft-primary">Edit</button>
                                </div>
                            </div>
                            <h5 className="font-size-14">Jean Berwick</h5>
                        </div>

                        <div className="mt-4">
                            <p className="text-muted font-size-14 mb-1">Email</p>
                            <h5 className="font-size-14">adc@123.com</h5>
                        </div>

                        <div className="mt-4">
                            <p className="text-muted font-size-14 mb-1">Location</p>
                            <h5 className="font-size-14 mb-0">California, USA</h5>
                        </div>
                    </div>
                    <hr className="my-4" />

                    <div>
                        <div className="d-flex">
                            <div className="flex-grow-1">
                                <h5 className="font-size-11 text-muted text-uppercase">Group in common</h5>
                            </div>
                        </div>

                        <ul className="list-unstyled chat-list mx-n4">
                            <li>
                                <a href="javascript: void(0);">
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
                                </a>
                            </li>
                            <li>
                                <a href="javascript: void(0);">
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
                                </a>
                            </li>
                        </ul>
                    </div>

                    <hr className="my-4" />

                    <div>
                        <div className="d-flex">
                            <div className="flex-grow-1">
                                <h5 className="font-size-11 text-muted text-uppercase">Media</h5>
                            </div>
                            <div className="flex-shrink-0">
                                <a href="#" className="font-size-12 d-block mb-2">Show all</a>
                            </div>
                        </div>
                        <div className="profile-media-img">
                            <div className="media-img-list">
                                <a href="#">
                                    <img src="assets/images/small/img-1.jpg" alt="media img" className="img-fluid" />
                                </a>
                            </div>
                            <div className="media-img-list">
                                <a href="#">
                                    <img src="assets/images/small/img-2.jpg" alt="media img" className="img-fluid" />
                                </a>
                            </div>
                            <div className="media-img-list">
                                <a href="#">
                                    <img src="assets/images/small/img-3.jpg" alt="media img" className="img-fluid" />
                                </a>
                            </div>
                            <div className="media-img-list">
                                <a href="#">
                                    <img src="assets/images/small/img-4.jpg" alt="media img" className="img-fluid" />
                                    <div className="bg-overlay">+ 15</div>
                                </a>
                            </div>
                        </div>
                    </div>

                    <hr className="my-4" />

                    <div>
                        <div>
                            <h5 className="font-size-11 text-muted text-uppercase mb-3">Attached Files</h5>
                        </div>

                        <div>
                            <div className="card p-2 border mb-2">
                                <div className="d-flex align-items-center">
                                    <div className="flex-shrink-0 avatar-xs ms-1 me-3">
                                        <div className="avatar-title bg-soft-primary text-primary rounded-circle">
                                            <i className="bx bx-file"></i>
                                        </div>
                                    </div>
                                    <div className="flex-grow-1 overflow-hidden">
                                        <h5 className="font-size-14 text-truncate mb-1">design-phase-1-approved.pdf</h5>
                                        <p className="text-muted font-size-13 mb-0">12.5 MB</p>
                                    </div>

                                    <div className="flex-shrink-0 ms-3">
                                        <div className="d-flex gap-2">
                                            <div>
                                                <a href="#" className="text-muted px-1">
                                                    <i className="bx bxs-download"></i>
                                                </a>
                                            </div>
                                            <div className="dropdown">
                                                <a className="dropdown-toggle text-muted px-1" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    <i className="bx bx-dots-horizontal-rounded"></i>
                                                </a>
                                                <div className="dropdown-menu dropdown-menu-end">
                                                    <a className="dropdown-item d-flex align-items-center justify-content-between" href="#">Share <i className="bx bx-share-alt ms-2 text-muted"></i></a>
                                                    <a className="dropdown-item d-flex align-items-center justify-content-between" href="#">Bookmark <i className="bx bx-bookmarks text-muted ms-2"></i></a>
                                                    <div className="dropdown-divider"></div>
                                                    <a className="dropdown-item d-flex align-items-center justify-content-between" href="#">Delete <i className="bx bx-trash ms-2 text-muted"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="card p-2 border mb-2">
                                <div className="d-flex align-items-center">
                                    <div className="flex-shrink-0 avatar-xs ms-1 me-3">
                                        <div className="avatar-title bg-soft-primary text-primary rounded-circle">
                                            <i className="bx bx-image"></i>
                                        </div>
                                    </div>
                                    <div className="flex-grow-1 overflow-hidden">
                                        <h5 className="font-size-14 text-truncate mb-1">Image-1.jpg</h5>
                                        <p className="text-muted font-size-13 mb-0">4.2 MB</p>
                                    </div>

                                    <div className="flex-shrink-0 ms-3">
                                        <div className="d-flex gap-2">
                                            <div>
                                                <a href="#" className="text-muted px-1">
                                                    <i className="bx bxs-download"></i>
                                                </a>
                                            </div>
                                            <div className="dropdown">
                                                <a className="dropdown-toggle text-muted px-1" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    <i className="bx bx-dots-horizontal-rounded"></i>
                                                </a>
                                                <div className="dropdown-menu dropdown-menu-end">
                                                    <a className="dropdown-item d-flex align-items-center justify-content-between" href="#">Share <i className="bx bx-share-alt ms-2 text-muted"></i></a>
                                                    <a className="dropdown-item d-flex align-items-center justify-content-between" href="#">Bookmark <i className="bx bx-bookmarks text-muted ms-2"></i></a>
                                                    <div className="dropdown-divider"></div>
                                                    <a className="dropdown-item d-flex align-items-center justify-content-between" href="#">Delete <i className="bx bx-trash ms-2 text-muted"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="card p-2 border mb-2">
                                <div className="d-flex align-items-center">
                                    <div className="flex-shrink-0 avatar-xs ms-1 me-3">
                                        <div className="avatar-title bg-soft-primary text-primary rounded-circle">
                                            <i className="bx bx-image"></i>
                                        </div>
                                    </div>
                                    <div className="flex-grow-1 overflow-hidden">
                                        <h5 className="font-size-14 text-truncate mb-1">Image-2.jpg</h5>
                                        <p className="text-muted font-size-13 mb-0">3.1 MB</p>
                                    </div>

                                    <div className="flex-shrink-0 ms-3">
                                        <div className="d-flex gap-2">
                                            <div>
                                                <a href="#" className="text-muted px-1">
                                                    <i className="bx bxs-download"></i>
                                                </a>
                                            </div>
                                            <div className="dropdown">
                                                <a className="dropdown-toggle text-muted px-1" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    <i className="bx bx-dots-horizontal-rounded"></i>
                                                </a>
                                                <div className="dropdown-menu dropdown-menu-end">
                                                    <a className="dropdown-item d-flex align-items-center justify-content-between" href="#">Share <i className="bx bx-share-alt ms-2 text-muted"></i></a>
                                                    <a className="dropdown-item d-flex align-items-center justify-content-between" href="#">Bookmark <i className="bx bx-bookmarks text-muted ms-2"></i></a>
                                                    <div className="dropdown-divider"></div>
                                                    <a className="dropdown-item d-flex align-items-center justify-content-between" href="#">Delete <i className="bx bx-trash ms-2 text-muted"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="card p-2 border mb-2">
                                <div className="d-flex align-items-center">
                                    <div className="flex-shrink-0 avatar-xs ms-1 me-3">
                                        <div className="avatar-title bg-soft-primary text-primary rounded-circle">
                                            <i className="bx bx-file"></i>
                                        </div>
                                    </div>
                                    <div className="flex-grow-1 overflow-hidden">
                                        <h5 className="font-size-14 text-truncate mb-1">Landing-A.zip</h5>
                                        <p className="text-muted font-size-13 mb-0">6.7 MB</p>
                                    </div>

                                    <div className="flex-shrink-0 ms-3">
                                        <div className="d-flex gap-2">
                                            <div>
                                                <a href="#" className="text-muted px-1">
                                                    <i className="bx bxs-download"></i>
                                                </a>
                                            </div>
                                            <div className="dropdown">
                                                <a className="dropdown-toggle text-muted px-1" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    <i className="bx bx-dots-horizontal-rounded"></i>
                                                </a>
                                                <div className="dropdown-menu dropdown-menu-end">
                                                    <a className="dropdown-item d-flex align-items-center justify-content-between" href="#">Share <i className="bx bx-share-alt ms-2 text-muted"></i></a>
                                                    <a className="dropdown-item d-flex align-items-center justify-content-between" href="#">Bookmark <i className="bx bx-bookmarks text-muted ms-2"></i></a>
                                                    <div className="dropdown-divider"></div>
                                                    <a className="dropdown-item d-flex align-items-center justify-content-between" href="#">Delete <i className="bx bx-trash ms-2 text-muted"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- end user-profile-desc --> */}
            </div>
        </>
    );
};

export default UserProfileDetails;;