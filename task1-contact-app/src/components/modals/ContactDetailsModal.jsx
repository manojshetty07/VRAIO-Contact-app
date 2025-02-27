import React, { useRef } from "react";
import InputBox from "../TextInput";
import useData from "../../Detailsprovider/ContactDataProvider";


export function ContactDetailsModal() {
  const {
    addContact,
    openContactModal,
    setOpenContactModal,
    getContact,
    contactIdToUpdate,
    setContactIdToUpdate,
    updateContact,
  } = useData();
  
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const nickNameRef = useRef();
  const dobRef = useRef();
  const phoneNumber1Ref = useRef();
  const phoneNumber2Ref = useRef();
  const email1Ref = useRef();
  const email2Ref = useRef();

  const [contact] = getContact(contactIdToUpdate);

  async function handleSubmit() {
    const data = {
      id: contact?.id || Date.now(),
      firstName: firstNameRef.current.value,
      lastName: lastNameRef.current.value,
      nickName: nickNameRef.current.value,
      dob: dobRef.current.value,
      phoneNumber1: phoneNumber1Ref.current.value,
      phoneNumber2: phoneNumber2Ref.current.value,
      email1: email1Ref.current.value,
      email2: email2Ref.current.value,
    };

    if (contact?.id) {
      await updateContact(contact.id, data); // Pass data for update
      setContactIdToUpdate(null);
    } else {
      addContact(data); // Add new contact
    }
    
    setOpenContactModal(false);
  }

  if (!openContactModal) return null;

  return (
    <div className="modal-overlay">
      <form
        className="modal-form"
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        <div className="form-group">
          <InputBox
            type="text"
            placeholder="Firstname"
            inputRef={firstNameRef}
            required={true}
            value={contact?.firstName}
          />
          <InputBox
            type="text"
            placeholder="Lastname"
            inputRef={lastNameRef}
            value={contact?.lastName}
          />
          <InputBox
            type="text"
            placeholder="Nickname"
            inputRef={nickNameRef}
            value={contact?.nickName}
          />
          <InputBox
            type="date"
            placeholder="DOB"
            inputRef={dobRef}
            value={contact?.dob}
          />
          <InputBox
            type="tel"
            placeholder="Phone number 1"
            pattern="\d{10}"
            Msg="Please enter exactly 10 digits"
            inputRef={phoneNumber1Ref}
            required={true}
            value={contact?.phoneNumber1}
          />
          <InputBox
            type="tel"
            placeholder="Phone number 2 (Optional)"
            pattern="\d{10}"
            Msg="Please enter exactly 10 digits"
            inputRef={phoneNumber2Ref}
            value={contact?.phoneNumber2}
          />
          <InputBox
            type="email"
            placeholder="Email 1"
            inputRef={email1Ref}
            required={true}
            value={contact?.email1}
          />
          <InputBox
            type="email"
            placeholder="Email 2"
            inputRef={email2Ref}
            value={contact?.email2}
          />
          <div className="form-buttons">
            <button
              type="button"
              onClick={() => {
                setOpenContactModal(false);
                setContactIdToUpdate(null);
              }}
              className="cancel-button"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="save-button"
            >
              Save
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
