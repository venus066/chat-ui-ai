import React from "react";
import { TabContent, TabPane } from 'reactstrap';

// redux
import { useSelector } from "react-redux";


// constants
import { TABS } from "../../constants/index";

// component
import Profile from "./Profile/index";
import Chats from "./Chats/index";
import Contacts from "./Contacts/index";
import Calls from "./Calls/index";
import Bookmark from "./Bookmark/index";
import Settings from "./Settings/index";

interface LeftbarProps { }
const Leftbar = (props: LeftbarProps) => {

    const { activeTab } = useSelector(
        (state: any) => ({
            activeTab: state.Layout.activeTab,
        })
    );

    return (
        <>
            {/* start chat-leftsidebar */}
            <div className="chat-leftsidebar">

                <TabContent activeTab={activeTab}>
                    {/* Start Profile tab-pane */}
                    <TabPane tabId={TABS.USERS} role="tabpanel" aria-labelledby="pills-user-tab">
                        <Profile />
                    </TabPane >
                    {/* End Profile tab-pane */}

                    {/* Start chats tab-pane */}
                    <TabPane tabId={TABS.CHAT} role="tabpanel" aria-labelledby="pills-chat-tab">
                        <Chats />
                    </TabPane >
                    {/* End chats tab-pane */}

                    {/* Start contacts tab-pane */}
                    <TabPane tabId={TABS.CONTACTS} role="tabpanel" aria-labelledby="pills-contacts-tab">
                        <Contacts />
                    </TabPane >
                    {/* End contacts tab-pane */}

                    {/* Start calls tab-pane */}
                    <TabPane tabId={TABS.CALLS} role="tabpanel" aria-labelledby="pills-calls-tab">
                        <Calls />
                    </TabPane >
                    {/* End calls tab-pane */}

                    {/* Start bookmark tab-pane */}
                    <TabPane tabId={TABS.BOOKMARK} role="tabpanel" aria-labelledby="pills-bookmark-tab">
                        <Bookmark />
                    </TabPane >
                    {/* End bookmark tab-pane */}

                    {/* Start settings tab-pane */}
                    <TabPane tabId={TABS.SETTINGS} role="tabpanel" aria-labelledby="pills-setting-tab">
                        <Settings />
                    </TabPane >
                    {/* End settings tab-pane */}
                </TabContent>
                {/* end tab content */}
            </div>
            {/* end chat-leftsidebar */}
        </>
    );
};

export default Leftbar;
