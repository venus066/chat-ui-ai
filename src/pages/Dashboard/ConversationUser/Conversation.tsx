import React from "react";
import { Link } from "react-router-dom";
//redux
import { useSelector, useDispatch } from "react-redux";

// components
import AppSimpleBar from "../../../components/AppSimpleBar";
import Loader from "../../../components/Loader";
import Message from "./Message";
import Day from "./Day";


// interface
import { MessagesTypes } from "../../../data/messages";

interface ConversationProps {
  chatUserConversations: any;
  chatUserDetails: any;
}
const Conversation = ({ chatUserDetails, chatUserConversations }: ConversationProps) => {
  const { getUserConversationsLoading } = useSelector((state: any) => ({
    getUserConversationsLoading: state.Chats.getUserConversationsLoading,
  }));

  const messages = chatUserConversations.messages && chatUserConversations.messages.length ? chatUserConversations.messages : [];

  return (
    <AppSimpleBar
      className="chat-conversation p-3 p-lg-4 positin-relative"
    >
      {
        getUserConversationsLoading && <Loader />
      }
      <ul
        className="list-unstyled chat-conversation-list"
        id="chat-conversation-list"
      >
        {
          (messages || []).map((message: MessagesTypes, key: number) => {
            return (
              <Message
                message={message}
                key={key}
                chatUserDetails={chatUserDetails}
              />
            );
          })
        }
        {/* <Message
          message={{}}
          hasText={true}
          isFromMe={false}
        />
        <Message
          message={{}}
          isFromMe={false}
          hasImages={true}
        />
        <Message
          message={{}}
          isFromMe={false}
          hasAttachments={true}
        />
        <Message
          message={{}}
          isFromMe={false}
          isTyping={true}
        />
        <Message
          message={{}}
          hasText={true}
          isFromMe={true}
        />
        <Message
          message={{}}
          isFromMe={true}
          hasAttachments={true}
        />
        <Message
          message={{}}
          isFromMe={true}
          hasImages={true}
        />
        <Day /> */}
      </ul>
    </AppSimpleBar>
  );
};

export default Conversation;
