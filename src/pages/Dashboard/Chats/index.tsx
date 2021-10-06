import React, { useEffect, useState } from "react";

import { Button, Form, UncontrolledTooltip } from "reactstrap";

//redux
import { useSelector, useDispatch } from "react-redux";

// components
import Loader from "../../../components/Loader";
import AppSimpleBar from "../../../components/AppSimpleBar";
import AddGroupModal from "../../../components/AddGroupModal";
import AddContactModal from "../../../components/AddContactModal";
import Favourites from "./Favourites";
import DirectMessages from "./DirectMessages";
import Chanels from "./Chanels";
import AddButton from "../../../components/AddButton";

// actions
import {
  inviteContact,
  resetContacts,
} from "../../../redux/actions";

// dummy data
import { favourites } from "../../../data";

interface IndexProps { }
const Index = (props: IndexProps) => {
  const dispatch = useDispatch();
  const { isContactInvited } = useSelector(
    (state: any) => ({
      isContactInvited: state.Contacts.isContactInvited,
    })
  );

  /*
  add contact modal handeling
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
        <Favourites favourites={favourites} />

        {/* direct messages */}
        <DirectMessages />

        {/* channels list */}
        <Chanels />
        {/* End chat-message-list */}
      </AppSimpleBar>

    </div>
    {/* Start chats content */}
    {/* Start add group Modal */}
    <AddGroupModal />

    {/* add contact modal */}
    <AddContactModal
      isOpen={isOpen}
      onClose={closeModal}
      onInvite={onInviteContact}
    />
  </>;
};

export default Index;
