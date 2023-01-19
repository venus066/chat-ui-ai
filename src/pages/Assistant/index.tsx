import React from "react";
import classnames from "classnames";
// hooks
// hooks
import { useConversationUserType, useRedux } from "../../hooks/index";
// component
import Leftbar from "./Leftbar";
import ConversationUser from "./ConversationUser/index";
import UserProfileDetails from "./UserProfileDetails/index";
import Welcome from "./ConversationUser/Welcome";

interface IndexProps {}
const Index = (props: IndexProps) => {

  // global store
  const { dispatch, useAppSelector } = useRedux();

  const {
    selectedChat,
    favourites
  } = useAppSelector(state => ({
    selectedChat: state.Chats.selectedChat,
    favourites: state.Chats.favourites,
  }));

  const { isChannel } = useConversationUserType();

  /*
  select chat handeling :
    get conversations
    get chat user details
  */

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
              <ConversationUser isChannel={isChannel} />
            </div>
            <UserProfileDetails isChannel={isChannel} />
          </div>
        ) : (
          <Welcome/>
        )}
      </div>
    </>
  );
};

export default Index;
