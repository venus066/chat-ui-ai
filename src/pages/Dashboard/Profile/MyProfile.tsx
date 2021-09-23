import React, { useState } from 'react';

import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";

interface MyProfileProps {
    basicDetails: any;
}
const MyProfile = ({ basicDetails }: MyProfileProps) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggle = () => setDropdownOpen(!dropdownOpen);

    return (
        <>
            <div className="user-profile-img">
                <img src={basicDetails.coverImage} className="profile-img" style={{ height: '160px' }} alt="" />
                <div className="overlay-content">
                    <div>
                        <div className="user-chat-nav p-2 ps-3">

                            <div className="d-flex w-100 align-items-center">
                                <div className="flex-grow-1">
                                    <h5 className="text-white mb-0">My Profile</h5>
                                </div>
                                <div className="flex-shrink-0">
                                    <Dropdown isOpen={dropdownOpen} toggle={toggle}>
                                        <DropdownToggle className="btn nav-btn text-white" type="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <i className='bx bx-dots-vertical-rounded'></i>
                                        </DropdownToggle>
                                        <DropdownMenu className="dropdown-menu-end">
                                            <a className="dropdown-item d-flex align-items-center justify-content-between" href="#">Info <i className="bx bx-info-circle ms-2 text-muted"></i></a>
                                            <a className="dropdown-item d-flex align-items-center justify-content-between" href="#">Setting <i className="bx bx-cog text-muted ms-2"></i></a>
                                            <div className="dropdown-divider"></div>
                                            <a className="dropdown-item d-flex align-items-center justify-content-between" href="#">Help <i className="bx bx-help-circle ms-2 text-muted"></i></a>
                                        </DropdownMenu>
                                    </Dropdown>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="text-center p-3 p-lg-4 border-bottom pt-2 pt-lg-2 mt-n5 position-relative">
                <div className="mb-lg-3 mb-2">
                    <img src={basicDetails.avatar} className="rounded-circle avatar-lg img-thumbnail" alt="" />
                </div>

                <h5 className="font-size-16 mb-1 text-truncate">{`${basicDetails.firstName} ${basicDetails.lastName}`}</h5>
                <p className="text-muted font-size-14 text-truncate mb-0">{basicDetails.title}</p>
            </div>
        </>
    );
};
export default MyProfile;