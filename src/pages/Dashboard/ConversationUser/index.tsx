import React, { useEffect, useState } from "react";

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
  deleteUserMessages
} from "../../../redux/actions";

// hooks
import { useProfile } from "../../../hooks";

// components
import UserHead from "./UserHead";
import Conversation from "./Conversation";
import ChatInputSection from "./ChatInputSection/index";

// interface
import { MessagesTypes } from "../../../data/messages";

// dummy data
import { pinnedTabs } from "../../../data/index";

interface IndexProps {
  isChannel: boolean;
}
const Index = ({ isChannel }: IndexProps) => {
  const dispatch = useDispatch();
  const {
    chatUserDetails,
    chatUserConversations,
    isUserMessageSent,
    isMessageDeleted,
    isMessageForwarded,
    isUserMessagesDeleted
  } = useSelector((state: any) => ({
    chatUserDetails: state.Chats.chatUserDetails,
    chatUserConversations: state.Chats.chatUserConversations,
    isUserMessageSent: state.Chats.isUserMessageSent,
    isMessageDeleted: state.Chats.isMessageDeleted,
    isMessageForwarded: state.Chats.isMessageForwarded,
    isUserMessagesDeleted: state.Chats.isUserMessagesDeleted
  }));

  const onOpenUserDetails = () => {
    dispatch(toggleUserDetailsTab(true));
  };

  /*
  hooks
  */
  const { userProfile } = useProfile();

  /*
  reply handeling
  */
  const [replyData, setReplyData] = useState<
    null | MessagesTypes | undefined
  >();
  const onSetReplyData = (reply: null | MessagesTypes | undefined) => {
    setReplyData(reply);
  };

  /*
  send message
  */
  const onSend = (data: any) => {
    let params: any = {
      text: data.text && data.text,
      time: new Date().toISOString(),
      image: data.image && data.image,
      attachments: data.attachments && data.attachments,
      meta: {
        receiver: chatUserDetails.id,
        sender: userProfile.uid,
      },
    };
    if (replyData && replyData !== null) {
      params["replyOf"] = replyData;
    }

    dispatch(onSendMessage(params));
    if (!isChannel) {
      setTimeout(() => {
        dispatch(receiveMessage(chatUserDetails.id));
      }, 1000);
      setTimeout(() => {
        dispatch(readMessage(chatUserDetails.id));
      }, 1500);
      setTimeout(() => {
        dispatch(receiveMessageFromUser(chatUserDetails.id));
      }, 2000);
    }
    setReplyData(null);
  };

  useEffect(() => {
    if (isUserMessageSent || isMessageDeleted || isMessageForwarded || isUserMessagesDeleted) {
      dispatch(getChatUserConversations(chatUserDetails.id));
    }
  }, [
    dispatch,
    isUserMessageSent,
    chatUserDetails,
    isMessageDeleted,
    isMessageForwarded,
    isUserMessagesDeleted
  ]);

  const onDeleteMessage = (messageId: string | number) => {
    dispatch(deleteMessage(chatUserDetails.id, messageId));
  };

  const onDeleteUserMessages = () => {
    dispatch(deleteUserMessages(chatUserDetails.id));
  };

  return (
    <>
      <UserHead
        chatUserDetails={chatUserDetails}
        pinnedTabs={pinnedTabs}
        onOpenUserDetails={onOpenUserDetails}
        onDelete={onDeleteUserMessages}
        isChannel={isChannel}
      />
      <Conversation
        chatUserConversations={chatUserConversations}
        chatUserDetails={chatUserDetails}
        onDelete={onDeleteMessage}
        onSetReplyData={onSetReplyData}
        isChannel={isChannel}
      />
      <ChatInputSection
        onSend={onSend}
        replyData={replyData}
        onSetReplyData={onSetReplyData}
        chatUserDetails={chatUserDetails}
      />
    </>
  );
};

export default Index;
