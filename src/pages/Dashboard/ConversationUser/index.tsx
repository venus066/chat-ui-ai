import React, { useEffect } from "react";

//redux
import { useSelector, useDispatch } from "react-redux";

// actions
import {
  toggleUserDetailsTab,
  onSendMessage,
  getChatUserConversations,
} from "../../../redux/actions";

// hooks
import { useProfile } from "../../../hooks";

// components
import UserHead from "./UserHead";
import Conversation from "./Conversation";
import ChatInputSection from "./ChatInputSection/index";

// dummy data
import { pinnedTabs } from "../../../data/index";

const Index = () => {
  const dispatch = useDispatch();
  const { chatUserDetails, chatUserConversations, isUserMessageSent } =
    useSelector((state: any) => ({
      chatUserDetails: state.Chats.chatUserDetails,
      chatUserConversations: state.Chats.chatUserConversations,
      isUserMessageSent: state.Chats.isUserMessageSent,
    }));

  const onOpenUserDetails = () => {
    dispatch(toggleUserDetailsTab(true));
  };

  const { userProfile } = useProfile();

  /*
  send message
  */
  const onSend = (data: any) => {
    const params = {
      text: data.text ? data.text : "",
      time: new Date().toISOString(),
      meta: {
        receiver: chatUserDetails.id,
        sender: userProfile.uid,
      },
    };
    dispatch(onSendMessage(params));
  };
  useEffect(() => {
    if (isUserMessageSent) {
      dispatch(getChatUserConversations(chatUserDetails.id));
    }
  }, [dispatch, isUserMessageSent, chatUserDetails]);
  return (
    <>
      <UserHead
        chatUserDetails={chatUserDetails}
        pinnedTabs={pinnedTabs}
        onOpenUserDetails={onOpenUserDetails}
      />
      <Conversation
        chatUserConversations={chatUserConversations}
        chatUserDetails={chatUserDetails}
      />
      <ChatInputSection onSend={onSend} />
    </>
  );
};

export default Index;
