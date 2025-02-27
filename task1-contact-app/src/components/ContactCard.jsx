import React from "react";
import { AiFillDelete } from "react-icons/ai";
import { BiDetail } from "react-icons/bi";
import { MdEditSquare } from "react-icons/md";
import useData from "../Detailsprovider/ContactDataProvider";


export default function ContactCard({ name, phone, email, id }) {
  const {
    setContactIdToDelete,
    setContactIdToView,
    setOpenContactModal,
    setContactIdToUpdate,
  } = useData();
  return (
    <div className="contact-card-container">
      <div className="contact-card-details">
        <span className="contact-name">{name}</span>
        <span className="contact-phone">{phone}</span>
        <span className="contact-email">{email}</span>
      </div>
      <div className="contact-card-actions">
        <BiDetail
          size={20}
          className="action-icon view-icon"
          onClick={() => setContactIdToView(id)}
        />
        <MdEditSquare
          size={20}
          className="action-icon edit-icon"
          onClick={() => {
            setOpenContactModal(true);
            setContactIdToUpdate(id);
          }}
        />
        <AiFillDelete
          size={20}
          className="action-icon delete-icon"
          onClick={() => setContactIdToDelete(id)}
        />
      </div>
    </div>
  );
}
