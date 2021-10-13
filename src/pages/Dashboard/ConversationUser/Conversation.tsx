import React, { useEffect, useRef, useCallback, useState } from "react";
//redux
import { useDispatch, useSelector } from "react-redux";

// hooks
import { useProfile } from "../../../hooks";

// components
import AppSimpleBar from "../../../components/AppSimpleBar";
import Loader from "../../../components/Loader";
import Message from "./Message";
// import Day from "./Day";

// interface
import { MessagesTypes } from "../../../data/messages";
import ForwardModal from "../../../components/ForwardModal";

// actions
import { forwardMessage } from "../../../redux/actions";
interface ConversationProps {
  chatUserConversations: any;
  chatUserDetails: any;
  onDelete: (messageId: string | number) => any;
  onSetReplyData: (reply: null | MessagesTypes | undefined) => void;
  isChannel: boolean;
}
const Conversation = ({
  chatUserDetails,
  chatUserConversations,
  onDelete,
  onSetReplyData,
  isChannel
}: ConversationProps) => {
  const dispatch = useDispatch();
  const { userProfile } = useProfile();

  const { getUserConversationsLoading, isMessageForwarded } = useSelector(
    (state: any) => ({
      getUserConversationsLoading: state.Chats.getUserConversationsLoading,
      isMessageForwarded: state.Chats.isMessageForwarded,
    })
  );

  const messages =
    chatUserConversations.messages && chatUserConversations.messages.length
      ? chatUserConversations.messages
      : [];

  const ref = useRef<any>();
  const scrollElement = useCallback(() => {
    if (ref && ref.current) {
      const listEle = document.getElementById("chat-conversation-list");
      let offsetHeight = 0;
      if (listEle) {
        offsetHeight = listEle.scrollHeight - window.innerHeight + 250;
      }
      if (offsetHeight) {
        ref.current
          .getScrollElement()
          .scrollTo({ top: offsetHeight, behavior: "smooth" });
      }
    }
  }, [ref]);

  useEffect(() => {
    if (ref && ref.current) {
      ref.current.recalculate();
    }
  }, []);
  useEffect(() => {
    if (chatUserConversations.messages) {
      scrollElement();
    }
  }, [chatUserConversations.messages, scrollElement]);

  /*
  forward message
  */
  const [forwardData, setForwardData] = useState<
    null | MessagesTypes | undefined
  >();
  const [isOpenForward, setIsOpenForward] = useState<boolean>(false);
  const onOpenForward = (message: MessagesTypes) => {
    setForwardData(message);
    setIsOpenForward(true);
  };
  const onCloseForward = () => {
    setIsOpenForward(false);
  };

  const onForwardMessage = (data: any) => {
    const params = {
      contacts: data.contacts,
      message: data.message,
      forwardedMessage: forwardData,
    };
    dispatch(forwardMessage(params));
  };
  useEffect(() => {
    if (isMessageForwarded) {
      setIsOpenForward(false);
    }
  }, [isMessageForwarded]);
  return (
    <AppSimpleBar
      scrollRef={ref}
      className="chat-conversation p-3 p-lg-4 positin-relative"
    >
      {getUserConversationsLoading && <Loader />}
      <ul
        className="list-unstyled chat-conversation-list"
        id="chat-conversation-list"
      >
        {(messages || []).map((message: MessagesTypes, key: number) => {
          const isFromMe = message.meta.sender + "" === userProfile.uid + "";
          return (
            <Message
              message={message}
              key={key}
              chatUserDetails={chatUserDetails}
              onDelete={onDelete}
              onSetReplyData={onSetReplyData}
              isFromMe={isFromMe}
              onOpenForward={onOpenForward}
              isChannel={isChannel}
            />
          );
        })}
        {/*  <Day /> */}
      </ul>
      {isOpenForward && (
        <ForwardModal
          isOpen={isOpenForward}
          onClose={onCloseForward}
          forwardData={forwardData}
          chatUserDetails={chatUserDetails}
          onForward={onForwardMessage}
        />
      )}
    </AppSimpleBar>
  );
};

export default Conversation;
