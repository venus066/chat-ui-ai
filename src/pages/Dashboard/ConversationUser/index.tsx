import React from "react";

//redux
import { useSelector } from "react-redux";

// components
import UserHead from "./UserHead";
import Conversation from "./Conversation";
import ChatInputSection from "./ChatInputSection";

// dummy data
import { pinnedTabs } from "../../../data/index";

const Index = () => {
  const { chatUserDetails } = useSelector((state: any) => ({
    chatUserDetails: state.Chats.chatUserDetails,
  }));

  return (
    <>
      <UserHead chatUserDetails={chatUserDetails} pinnedTabs={pinnedTabs} />
      <Conversation />
      <ChatInputSection />
    </>
  );
};

export default Index;
