import { createContext, useContext, useState } from "react";

const ContactDataContext = createContext();

export function ContactDataProvider({ children }) {
  const [contactList, setContactList] = useState([

    {
      id: 1,
      firstName: "Manoj",
      lastName: "Shetty",
      nickName: "manu",
      dob: "25-02-2004",
      phoneNumber:[9980387713],
      email:["manoj@gmail.com"],

    },
    {
      id: 2,
      firstName: "Mithun",
      lastName: "Poojary",
      nickName: "mithu",
      dob: "10-08-2003",
      phoneNumber:[9874654512],
      email: ["mithunpoojary@gmail.com"],
    },
    {
      id: 3,
      firstName: "Sudeep",
      lastName: "Acharya",
      nickName: "sudee",
      dob: "18-01-2003",
      phoneNumber:[8545647612],
      email:["sudeepacharya@gmail.com"],
    },
    
  ]);

  const [openContactModal, setOpenContactModal] = useState(false);
  const [contactIdToDelete, setContactIdToDelete] = useState(null);
  const [contactIdToView, setContactIdToView] = useState(null);
  const [contactIdToUpdate, setContactIdToUpdate] = useState(null);

  function getContact(contactId) {
    return contactList.filter((contact) => contactId === contact.id);
  }

  function addContact(contact) {
    try {
      setContactList((prev) => [...prev, contact]);
    } catch (error) {}
  }

  function updateContact(contact) {
    try {
      deleteContact(contact.id);
      addContact(contact);
    } catch (error) {}
  }

  function deleteContact(contactId) {
    setContactList(contactList.filter((contact) => contact.id !== contactId));
  }

  return (
    <ContactDataContext.Provider
      value={{
        contactList,
        openContactModal,
        setOpenContactModal,
        contactIdToDelete,
        setContactIdToDelete,
        contactIdToView,
        setContactIdToView,
        contactIdToUpdate,
        setContactIdToUpdate,
        getContact,
        addContact,
        deleteContact,
        updateContact,
      }}
    >
      {children}
    </ContactDataContext.Provider>
  );
}

export default function useContactData() {
  return useContext(ContactDataContext);
}
