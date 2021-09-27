import React from 'react';

// interface
import { BasicDetailsTypes } from "../../../data/settings";

interface UserProfileProps {
    basicDetails: BasicDetailsTypes;
}
const UserProfile = ({ basicDetails }: UserProfileProps) => {
    const fullName = basicDetails ? `${basicDetails.firstName} ${basicDetails.lastName}` : "-";
    return (
        <div className="text-center p-3 p-lg-4 border-bottom pt-2 pt-lg-2 mt-n5 position-relative">
            <div className="mb-3 profile-user">
                <img src={basicDetails && basicDetails.profile ? basicDetails.profile : ""} className="rounded-circle avatar-lg img-thumbnail user-profile-image" alt="user-profile-image" />
                <div className="avatar-xs p-0 rounded-circle profile-photo-edit">
                    <input id="profile-img-file-input" type="file" className="profile-img-file-input" />
                    <label htmlFor="profile-img-file-input" className="profile-photo-edit avatar-xs">
                        <span className="avatar-title rounded-circle bg-light text-body">
                            <i className="bx bxs-camera"></i>
                        </span>
                    </label>
                </div>
            </div>

            <h5 className="font-size-16 mb-1 text-truncate">{fullName}</h5>

            <div className="dropdown d-inline-block">
                <a className="text-muted dropdown-toggle d-block" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i className="bx bxs-circle text-success font-size-10 align-middle"></i> Active <i className="mdi mdi-chevron-down"></i>
                </a>

                <div className="dropdown-menu">
                    <a className="dropdown-item" href="#"><i className="bx bxs-circle text-success font-size-10 me-1 align-middle"></i> Active</a>
                    <a className="dropdown-item" href="#"><i className="bx bxs-circle text-warning font-size-10 me-1 align-middle"></i> Away</a>
                    <a className="dropdown-item" href="#"><i className="bx bxs-circle text-danger font-size-10 me-1 align-middle"></i> Do not disturb</a>
                </div>
            </div>


        </div>
    );
};

export default UserProfile;