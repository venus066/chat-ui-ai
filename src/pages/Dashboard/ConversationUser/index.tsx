import React, { useEffect } from "react";

//redux
import { useSelector, useDispatch } from "react-redux";

// actions
import {
  toggleUserDetailsTab,
  getChatUserConversations,
  onSendMessage,
  receiveMessage,
  readMessage,
  receiveMessageFromUser,
  deleteMessage,
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
  const {
    chatUserDetails,
    chatUserConversations,
    isUserMessageSent,
    isMessageDeleted,
  } = useSelector((state: any) => ({
    chatUserDetails: state.Chats.chatUserDetails,
    chatUserConversations: state.Chats.chatUserConversations,
    isUserMessageSent: state.Chats.isUserMessageSent,
    isMessageDeleted: state.Chats.isMessageDeleted,
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
      text: data.text && data.text,
      time: new Date().toISOString(),
      image: data.image && data.image,
      attachments: data.attachments && data.attachments,
      meta: {
        receiver: chatUserDetails.id,
        sender: userProfile.uid,
      },
    };

    dispatch(onSendMessage(params));
    setTimeout(() => {
      dispatch(receiveMessage(chatUserDetails.id));
    }, 1000);
    setTimeout(() => {
      dispatch(readMessage(chatUserDetails.id));
    }, 1500);
    setTimeout(() => {
      dispatch(receiveMessageFromUser(chatUserDetails.id));
    }, 2000);
  };

  useEffect(() => {
    if (isUserMessageSent || isMessageDeleted) {
      dispatch(getChatUserConversations(chatUserDetails.id));
    }
  }, [dispatch, isUserMessageSent, chatUserDetails, isMessageDeleted]);

  const onDeleteMessage = (messageId: string | number) => {
    dispatch(deleteMessage(chatUserDetails.id, messageId));
  };
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
        onDelete={onDeleteMessage}
      />
      <ChatInputSection onSend={onSend} />
    </>
  );
};

export default Index;
