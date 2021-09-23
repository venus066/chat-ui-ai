import React from 'react';

// components
import AppSimpleBar from "../../../components/AppSimpleBar";
import MyProfile from "./MyProfile";
import UserDescription from "./UserDescription";
import Media from "./Media";
import AttachedFiles from "./AttachedFiles";

// dummy data
import { profileDetails } from "../../../data/index";

interface IndexProps {

}
const Index = (props: IndexProps) => {
    // get user profile details
    return (
        <div>
            <MyProfile basicDetails={profileDetails.basicDetails} />
            {/* End profile user */}

            {/* Start user-profile-desc */}
            <AppSimpleBar className="p-4 profile-desc">
                <UserDescription />
                <hr className="my-4" />

                <Media />

                <hr className="my-4" />

                <AttachedFiles />

            </AppSimpleBar>
            {/* end user-profile-desc */}
        </div>
    );
};

export default Index;;