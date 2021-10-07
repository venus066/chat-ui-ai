import React, { useEffect, useState } from "react";

//redux
import { useSelector, useDispatch } from "react-redux";

// components
import Loader from "../../../components/Loader";
import AppSimpleBar from "../../../components/AppSimpleBar";
import InviteContactModal from "../../../components/InviteContactModal";
import ListHeader from "./ListHeader";
import Contact from "./Contact";

// actions
import {
  getContacts,
  inviteContact,
  resetContacts,
} from "../../../redux/actions";

//utils
import { divideByKey, DivideByKeyResultTypes } from "../../../utils";

interface IndexProps { }

const Index = (props: IndexProps) => {
  const dispatch = useDispatch();

  const { contactsList, getContactsLoading, isContactInvited } = useSelector(
    (state: any) => ({
      contactsList: state.Contacts.contacts,
      getContactsLoading: state.Contacts.getContactsLoading,
      isContactInvited: state.Contacts.isContactInvited,
    })
  );

  /*
  get contacts
  */
  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  const [contacts, setContacts] = useState<Array<any>>([]);
  const [contactsData, setContactsData] = useState<Array<any>>([]);
  useEffect(() => {
    if (contactsList.length > 0) {
      setContacts(contactsList);
    }
  }, [contactsList]);

  useEffect(() => {
    if (contacts.length > 0) {
      const formattedContacts = divideByKey("firstName", contacts);
      setContactsData(formattedContacts);
    }
  }, [contacts]);

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

  /*
  contact search
  */
  const [search, setSearch] = useState("");
  const onChangeSearch = (value: string) => {
    setSearch(value);
    let modifiedContacts = [...contactsList];
    let filteredContacts = (modifiedContacts || []).filter((c: any) =>
      c["firstName"].toLowerCase().includes(value.toLowerCase())
    );
    setContacts(filteredContacts);
  };

  return (
    <>
      <div className="position-relative">
        {getContactsLoading && <Loader />}
        <ListHeader
          search={search}
          onChangeSearch={onChangeSearch}
          openModal={openModal}
        />

        <AppSimpleBar className="chat-message-list chat-group-list">
          <div>
            {(contactsData || []).map(
              (letterContacts: DivideByKeyResultTypes, key: number) => (
                <Contact
                  letterContacts={letterContacts}
                  key={key}
                  index={key}
                />
              )
            )}
          </div>
        </AppSimpleBar>
      </div>
      <InviteContactModal
        isOpen={isOpen}
        onClose={closeModal}
        onInvite={onInviteContact}
      />
    </>
  );
};

export default Index;
