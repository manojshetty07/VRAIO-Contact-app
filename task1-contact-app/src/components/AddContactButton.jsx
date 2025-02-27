import React from "react";
import useData from "../Detailsprovider/ContactDataProvider";


export default function AddContactButton() {
  const { setOpenContactModal } = useData();
  return (
    <div className="add-contact-btn-container">
      <button
        onClick={() => setOpenContactModal(true)}
        className="add-contact-btn"
      >
        Add Contact
      </button>
    </div>
  );
}
