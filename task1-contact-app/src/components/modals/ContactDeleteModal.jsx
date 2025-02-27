import React from "react";
import useData from "../../Detailsprovider/ContactDataProvider";



export default function ContactDeleteModal() {
  const { contactIdToDelete, setContactIdToDelete, deleteContact } = useData();
  if (!contactIdToDelete) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-form">
        <h2 className="modal-title">Delete Contact</h2>
        <p className="modal-text">Are you sure you want to delete this contact?</p>
        <div className="form-buttons">
          <button
            onClick={() => setContactIdToDelete(null)}
            className="cancel-button"
          >
            Cancel
          </button>
          <button
            onClick={() => {
              deleteContact(contactIdToDelete);
              setContactIdToDelete(null);
            }}
            className="delete-button"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
