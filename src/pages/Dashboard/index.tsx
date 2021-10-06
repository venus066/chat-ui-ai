import React from "react";

// component
import Leftbar from "./Leftbar";
import ConversationUser from "./ConversationUser/index";
import UserProfileDetails from "./UserProfileDetails";
import ChatInputSection from "./ChatInputSection";

interface IndexProps {}
const Index = (props: IndexProps) => {
  return (
    <>
      <Leftbar />

      <div className="user-chat w-100 overflow-hidden" id="user-chat">
        <div className="user-chat-overlay" id="user-chat-overlay"></div>

        <div className="chat-content d-lg-flex">
          <div className="w-100 overflow-hidden position-relative">
            <ConversationUser />

            <ChatInputSection />
          </div>

          <UserProfileDetails />
        </div>
      </div>
    </>
  );
};

export default Index;
