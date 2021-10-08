import React from "react";
import classnames from "classnames";

//redux
import { useSelector, useDispatch } from "react-redux";

import { Link } from "react-router-dom";

// actions 
import { toggleUserDetailsTab } from "../../../redux/actions";

// components
import Loader from "../../../components/Loader";
import ProfileUser from "./ProfileUser";
import Actions from "./Actions";
import BasicDetails from "./BasicDetails";
import Groups from "./Groups";
import Media from "./Media";
import AttachedFiles from "./AttachedFiles";

const Index = () => {
  const dispatch = useDispatch();

  const { chatUserDetails, getUserDetailsLoading, isOpenUserDetails } = useSelector(
    (state: any) => ({
      chatUserDetails: state.Chats.chatUserDetails,
      getUserDetailsLoading: state.Chats.getUserDetailsLoading,
      isOpenUserDetails: state.Chats.isOpenUserDetails,
    })
  );

  /*
  close tab
  */
  const onCloseUserDetails = () => {
    dispatch(toggleUserDetailsTab(false));
  };

  return (
    <>
      <div className={classnames("user-profile-sidebar", "position-relative", { "d-block": isOpenUserDetails })}>
        {getUserDetailsLoading && <Loader />}

        <ProfileUser onCloseUserDetails={onCloseUserDetails} chatUserDetails={chatUserDetails} />
        {/* <!-- End profile user --> */}

        {/* <!-- Start user-profile-desc --> */}
        <div className="p-4 user-profile-desc">
          {" "}
          {/* simplebar */}
          <Actions chatUserDetails={chatUserDetails} />
          <BasicDetails chatUserDetails={chatUserDetails} />
          <hr className="my-4" />
          <Groups chatUserDetails={chatUserDetails} />
          <hr className="my-4" />
          <Media chatUserDetails={chatUserDetails} />
          <hr className="my-4" />
          <AttachedFiles chatUserDetails={chatUserDetails} />
        </div>
        {/* <!-- end user-profile-desc --> */}
      </div>
    </>
  );
};

export default Index;
