import React from "react";
import classnames from "classnames";

//redux
import { useSelector } from "react-redux";

// component
import Leftbar from "./Leftbar";
import ConversationUser from "./ConversationUser/index";
import UserProfileDetails from "./UserProfileDetails";
import Welcome from "./ConversationUser/Welcome";

interface IndexProps {}
const Index = (props: IndexProps) => {
  const { selectedChat } = useSelector((state: any) => ({
    selectedChat: state.Chats.selectedChat,
  }));

  return (
    <>
      <Leftbar />

      <div
        className={classnames("user-chat", "w-100", "overflow-hidden", {
          "user-chat-show": selectedChat,
        })}
        id="user-chat"
      >
        <div className="user-chat-overlay" id="user-chat-overlay"></div>
        {selectedChat !== null ? (
          <div className="chat-content d-lg-flex">
            <div className="w-100 overflow-hidden position-relative">
              <ConversationUser />
            </div>
            <UserProfileDetails />
          </div>
        ) : (
          <Welcome />
        )}
      </div>
    </>
  );
};

export default Index;
