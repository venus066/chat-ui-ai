import { useState, useEffect } from "react";

//redux
import { useSelector } from "react-redux";

// api
import { getLoggedinUser } from "../api/apiCore";

//utils
import { divideByKey } from "../utils";

const useProfile = () => {
  const userProfileSession = getLoggedinUser();
  const [loading] = useState(userProfileSession ? false : true);
  const [userProfile] = useState(
    userProfileSession ? userProfileSession : null
  );

  return { userProfile, loading };
};

const useContacts = () => {
  const { contactsList } = useSelector(
    (state: any) => ({
      contactsList: state.Contacts.contacts,
    })
  );

  const [contacts, setContacts] = useState<Array<any>>([]);
  const [categorizedContacts, setCategorizedContacts] = useState<Array<any>>([]);
  useEffect(() => {
    if (contactsList.length > 0) {
      setContacts(contactsList);
    }
  }, [contactsList]);

  useEffect(() => {
    if (contacts.length > 0) {
      const formattedContacts = divideByKey("firstName", contacts);
      setCategorizedContacts(formattedContacts);
    }
  }, [contacts]);

  const totalContacts = (categorizedContacts || []).length;
  return { categorizedContacts, totalContacts };

};

export { useProfile, useContacts };
