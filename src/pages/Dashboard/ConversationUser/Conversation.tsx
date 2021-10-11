import React, { useEffect, useRef, useCallback } from "react";
//redux
import { useSelector } from "react-redux";

// components
import AppSimpleBar from "../../../components/AppSimpleBar";
import Loader from "../../../components/Loader";
import Message from "./Message";
// import Day from "./Day";


// interface
import { MessagesTypes } from "../../../data/messages";

interface ConversationProps {
  chatUserConversations: any;
  chatUserDetails: any;
}
const Conversation = ({ chatUserDetails, chatUserConversations }: ConversationProps) => {
  const { getUserConversationsLoading, isUserConversationsFetched } = useSelector((state: any) => ({
    getUserConversationsLoading: state.Chats.getUserConversationsLoading,
    isUserConversationsFetched: state.Chats.isUserConversationsFetched,
  }));

  const messages = chatUserConversations.messages && chatUserConversations.messages.length ? chatUserConversations.messages : [];

  const ref = useRef<any>();
  const scrollElement = useCallback(
    () => {
      if (ref && ref.current) {
        const listEle = document.getElementById("chat-conversation-list");
        let offsetHeight = 0;
        if (listEle) {
          offsetHeight = listEle.scrollHeight -
            window.innerHeight +
            250;
        }
        if (offsetHeight) {
          ref.current.getScrollElement().scrollTo({ top: offsetHeight, behavior: "smooth" });
        }
      }
    },
    [ref],
  );

  useEffect(() => {
    if (ref && ref.current) {
      ref.current.recalculate();
    }
  }, []);
  useEffect(() => {
    if (isUserConversationsFetched) {
      scrollElement();
    }
  }, [isUserConversationsFetched, scrollElement]);

  return (
    <AppSimpleBar
      scrollRef={ref}
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
        {/*  <Day /> */}
      </ul>
    </AppSimpleBar>
  );
};

export default Conversation;
