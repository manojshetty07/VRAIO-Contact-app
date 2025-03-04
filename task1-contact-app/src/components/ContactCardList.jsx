import React from "react";
import useData from "../Detailsprovider/ContactDataProvider";
import ContactCard from "../components/ContactCard"

export default function ContactCardList() {
  const { contactList } = useData();

  return (
    <div className="contact-card-list-container">
      {[...contactList]
        .sort((a, b) => a.firstName.localeCompare(b.firstName))
        .map((contact) => (
        <div key={contact.id} className="contact-card-item">
          <ContactCard
            id={contact.id}
            name={`${contact.firstName} ${contact.lastName}`}
            phone={contact.phoneNumber[0]}
            email={contact.email[0]}
          />
        </div>
      ))}
    </div>
  );
}
  
