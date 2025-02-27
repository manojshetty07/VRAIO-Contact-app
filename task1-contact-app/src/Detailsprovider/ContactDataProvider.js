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
      phoneNumber1: 9980387713,
      phoneNumber2: 8458655724,
      email1: "manoj@gmail.com",
      email2: "shettymanoj@gmail.com",
    },
    {
      id: 2,
      firstName: "Mithun",
      lastName: "Poojary",
      nickName: "mithu",
      dob: "10-08-2003",
      phoneNumber1: 9874654512,
      phoneNumber2: "",
      email1: "mithunpoojary@gmail.com",
      email2: "",
    },
    {
      id: 3,
      firstName: "Sudeep",
      lastName: "Acharya",
      nickName: "sudee",
      dob: "18-01-2003",
      phoneNumber1: 8545647612,
      phoneNumber2: "",
      email1: "sudeepacharya@gmail.com",
      email2: "",
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
    } catch (error) {
      console.error("Error adding contact:", error);
    }
  }

  async function updateContact(contact) {
    // Code for updating a contact can be implemented here
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
