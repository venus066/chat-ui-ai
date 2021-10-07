import React, { useEffect, useState } from "react";

import { Button, Form, UncontrolledTooltip } from "reactstrap";

//redux
import { useSelector, useDispatch } from "react-redux";

// components
import Loader from "../../../components/Loader";
import AppSimpleBar from "../../../components/AppSimpleBar";
import AddGroupModal from "../../../components/AddGroupModal";
import InviteContactModal from "../../../components/InviteContactModal";
import Favourites from "./Favourites";
import DirectMessages from "./DirectMessages";
import Chanels from "./Chanels";
import AddButton from "../../../components/AddButton";
import ContactModal from "../../../components/ContactModal";

// actions
import {
  inviteContact,
  resetContacts,
  getFavourites,
  getDirectMessages,
  getChannels,
  addContacts
} from "../../../redux/actions";

interface IndexProps { }
const Index = (props: IndexProps) => {
  const dispatch = useDispatch();
  const { isContactInvited, favourites, directMessages, channels,
    isContactsAdded
  } = useSelector(
    (state: any) => ({
      isContactInvited: state.Contacts.isContactInvited,
      favourites: state.Chats.favourites,
      directMessages: state.Chats.directMessages,
      channels: state.Chats.channels,
      isContactsAdded: state.Chats.isContactsAdded,
    })
  );

  /*
  get data
  */
  useEffect(() => {
    dispatch(getFavourites());
    dispatch(getDirectMessages());
    dispatch(getChannels());
  }, [dispatch]);

  /*
  invite contact modal handeling
  */
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };

  /*
  onInvite handeling
  */
  const onInviteContact = (data: any) => {
    dispatch(inviteContact(data));
  };
  useEffect(() => {
    if (isContactInvited) {
      setIsOpen(false);
      setTimeout(() => {
        dispatch(resetContacts("isContactInvited", false));
      }, 1000);
    }
  }, [dispatch, isContactInvited]);

  /*
  contact add handeling
  */
  const [isOpenAddContact, setIsOpenAddContact] = useState<boolean>(false);
  const openAddContactModal = () => {
    setIsOpenAddContact(true);
  };
  const closeAddContactModal = () => {
    setIsOpenAddContact(false);
  };
  const onAddContact = (contacts: Array<string | number>) => {
    dispatch(addContacts(contacts));
  };
  useEffect(() => {
    if (isContactsAdded) {
      setIsOpenAddContact(false);
      dispatch(getDirectMessages());
    }
  }, [dispatch, isContactsAdded]);
  return <>
    <div>
      <div className="px-4 pt-4">
        <div className="d-flex align-items-start">
          <div className="flex-grow-1">
            <h4 className="mb-4">Chats</h4>
          </div>
          <div className="flex-shrink-0">
            <div id="add-contact">

              {/* Button trigger modal */}
              <AddButton onClick={openModal} />
            </div>
            <UncontrolledTooltip target="add-contact" placement="bottom">
              Add Contact
            </UncontrolledTooltip>
          </div>
        </div>
        <Form>
          <div className="input-group mb-3">
            <input type="text" className="form-control bg-light border-0 pe-0" placeholder="Search here.." aria-label="Example text with button addon" aria-describedby="searchbtn-addon" />
            <Button className="btn btn-light" type="button" id="searchbtn-addon"><i className='bx bx-search align-middle'></i></Button>
          </div>
        </Form>

      </div> {/* .p-4 */}

      <AppSimpleBar className="chat-room-list">
        {/* Start chat-message-list */}
        {/* favourite */}
        <Favourites users={favourites} />

        {/* direct messages */}
        <DirectMessages users={directMessages} openAddContact={openAddContactModal} />

        {/* channels list */}
        <Chanels channels={channels} />
        {/* End chat-message-list */}
      </AppSimpleBar>

    </div>
    {/* Start chats content */}
    {/* Start add group Modal */}
    <AddGroupModal />

    {/* add contact modal */}
    {
      isOpen && <InviteContactModal
        isOpen={isOpen}
        onClose={closeModal}
        onInvite={onInviteContact}
      />
    }

    {
      isOpenAddContact &&
      <ContactModal
        isOpen={isOpenAddContact}
        onClose={closeAddContactModal}
        onAddContact={onAddContact}
      />
    }

  </>;
};

export default Index;
