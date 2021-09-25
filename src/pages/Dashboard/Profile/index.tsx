import React, { useEffect } from "react";

//redux
import { useSelector, useDispatch } from "react-redux";

// components
import AppSimpleBar from "../../../components/AppSimpleBar";
import MyProfile from "./MyProfile";
import UserDescription from "./UserDescription";
import Media from "./Media";
import AttachedFiles from "./AttachedFiles";

// actions
import { getProfileDetails } from "../../../redux/actions";
import Loader from "../../../components/Loader";

interface IndexProps {}
const Index = (props: IndexProps) => {
  const dispatch = useDispatch();

  const { profileDetails, getProfileLoading, isProfileFetched } = useSelector(
    (state: any) => ({
      profileDetails: state.Profile.profileDetails,
      getProfileLoading: state.Profile.getProfileLoading,
      isProfileFetched: state.Profile.isProfileFetched,
    })
  );

  // get user profile details
  useEffect(() => {
    dispatch(getProfileDetails());
  }, [dispatch]);

  return (
    <div className="position-relative">
      {getProfileLoading && !isProfileFetched && <Loader />}
      <MyProfile basicDetails={profileDetails.basicDetails} />

      <AppSimpleBar className="p-4 profile-desc">
        <UserDescription basicDetails={profileDetails.basicDetails} />
        <hr className="my-4" />

        <Media media={profileDetails.media} />

        <hr className="my-4" />

        <AttachedFiles attachedFiles={profileDetails.attachedFiles} />
      </AppSimpleBar>
    </div>
  );
};

export default Index;
