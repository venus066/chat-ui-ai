import React from "react";
import { TabContent, TabPane } from 'reactstrap';

// redux
import { useSelector } from "react-redux";


// constants
import { TABS } from "../../constants/index";

// component
import Leftbar from "./Leftbar";
import ConversationUser from "./ConversationUser/index";
import UserProfileDetails from "./UserProfileDetails";
import ChatInputSection from "./ChatInputSection";
interface IndexProps { }
const Index = (props: IndexProps) => {

  const { activeTab } = useSelector(
    (state: any) => ({
      activeTab: state.Layout.activeTab,
    })
  );

  return (
    <>
      <Leftbar />

      {/* user chat */}
      <div className="user-chat w-100 overflow-hidden">
        <div className="user-chat-overlay"></div>
        {/* TODO - welcome */}

        <div className="chat-content d-lg-flex">
          {/* start chat conversation section */}
          <div className="w-100 overflow-hidden position-relative">
            {/* conversation user */}
            <ConversationUser />

            {/* TODO - conversation group */}

            {/* start chat input section */}
            <ChatInputSection />
            {/* end chat input section */}
          </div>
          {/* end chat conversation section */}

          {/* start User profile detail sidebar */}
          <UserProfileDetails />
          {/* end User profile detail sidebar */}
        </div>
        {/* end user chat content */}
      </div>
    </>
  );
};

export default Index;
