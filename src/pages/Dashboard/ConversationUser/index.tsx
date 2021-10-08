import React from "react";

//redux
import { useSelector, useDispatch } from "react-redux";

// actions 
import { toggleUserDetailsTab } from "../../../redux/actions";

// components
import UserHead from "./UserHead";
import Conversation from "./Conversation";
import ChatInputSection from "./ChatInputSection";

// dummy data
import { pinnedTabs } from "../../../data/index";

const Index = () => {
  const dispatch = useDispatch();
  const { chatUserDetails } = useSelector((state: any) => ({
    chatUserDetails: state.Chats.chatUserDetails,
  }));

  const onOpenUserDetails = () => {
    dispatch(toggleUserDetailsTab(true));
  };
  return (
    <>
      <UserHead
        chatUserDetails={chatUserDetails}
        pinnedTabs={pinnedTabs}
        onOpenUserDetails={onOpenUserDetails}
      />
      <Conversation />
      <ChatInputSection />
    </>
  );
};

export default Index;
