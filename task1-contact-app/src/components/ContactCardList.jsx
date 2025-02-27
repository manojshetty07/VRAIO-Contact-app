import React from "react";
import useData from "../Detailsprovider/ContactDataProvider";
import ContactCard from "./ContactCard";  // Importing the updated ContactCard component

export default function ContactCardList() {
  const { contactList } = useData();

  return (
    <div className="contact-card-list-container">
      {contactList.map((contact) => (
        <div key={contact.id} className="contact-card-item">
          <ContactCard
            id={contact.id}
            name={`${contact.firstName} ${contact.lastName}`}
            phone={contact.phoneNumber1}
            email={contact.email1}
          />
        </div>
      ))}
    </div>
  );
}
