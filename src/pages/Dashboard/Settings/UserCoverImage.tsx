import React from 'react';

// interface
import { BasicDetailsTypes } from "../../../data/settings";

interface UserCoverImageProps {
    basicDetails: BasicDetailsTypes;
}
const UserCoverImage = ({ basicDetails }: UserCoverImageProps) => {
    return (
        <div className="user-profile-img">
            <img src={basicDetails && basicDetails.coverImage ? basicDetails.coverImage : ''} className="profile-img profile-foreground-img" style={{ height: '160px' }} alt="" />
            <div className="overlay-content">
                <div>
                    <div className="user-chat-nav p-3">

                        <div className="d-flex w-100 align-items-center">
                            <div className="flex-grow-1">
                                <h5 className="text-white mb-0">Settings</h5>
                            </div>
                            <div className="flex-shrink-0">
                                <div className="avatar-xs p-0 rounded-circle profile-photo-edit" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="bottom" title="Change Background">
                                    <input id="profile-foreground-img-file-input" type="file" className="profile-foreground-img-file-input" />
                                    <label htmlFor="profile-foreground-img-file-input" className="profile-photo-edit avatar-xs">
                                        <span className="avatar-title rounded-circle bg-light text-body">
                                            <i className="bx bxs-pencil"></i>
                                        </span>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserCoverImage;