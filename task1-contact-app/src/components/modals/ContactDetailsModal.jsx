import React, { useEffect, useRef, useState } from "react";
import { IoMdAddCircle, IoMdRemoveCircle } from "react-icons/io";
import useData from "../../Detailsprovider/ContactDataProvider";
import InputBox from "../TextInput";

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

  const firstNameRef = useRef(0);
  const lastNameRef = useRef(0);
  const nickNameRef = useRef(0);
  const dobRef = useRef(0);
  const phoneNumberRef = useRef([]);
  const emailRef = useRef([]);

  const [contact] = getContact(contactIdToUpdate);
  const [addPhoneField, setAddPhoneField] = useState([0]);
  const [addEmailField, setAddEmailField] = useState([0]);

  useEffect(() => {
    if (contact?.phoneNumber) {
      setAddPhoneField(contact.phoneNumber.map((_, i) => i));
    }
    if (contact?.email) {
      setAddEmailField(contact.email.map((_, i) => i));
    }
  }, [contact]);

  function handleSubmit() {
    const phNums = addPhoneField
      .map((val) => phoneNumberRef.current[val].value.trim())
      .filter((num) => num !== "")
      .map(Number);

    const emails = addEmailField
      .map((val) => emailRef.current[val].value.trim())
      .filter((email) => email !== "");

    let data = {
      id: contact?.id || Date.now(),
      firstName: firstNameRef?.current?.value,
      lastName: lastNameRef?.current?.value,
      nickName: nickNameRef?.current?.value,
      dob: dobRef?.current?.value,
      phoneNumber: phNums,
      email: emails,
    };
    if (contact?.id) {
      // updateContact(contact.id, data); 
      updateContact(data); 
      setContactIdToUpdate(null);
    } else {
      addContact(data); 
    }
    setOpenContactModal(false);
    setAddPhoneField([0]);
    setAddEmailField([0]);
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
            placeholder="First Name"
            inputRef={firstNameRef}
            required={true}
            value={contact?.firstName}
          />
          <InputBox
            type="text"
            placeholder="Last Name"
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
            placeholder="Date of Birth"
            inputRef={dobRef}
            value={contact?.dob}
          />

          
          {addPhoneField.map((val, i) => (
            <div className="input-group" key={val}>
              <InputBox
                type="tel"
                placeholder="Phone Number"
                pattern="\d{10}"
                Msg="Please enter exactly 10 digits"
                inputRef={(el) => (phoneNumberRef.current[val] = el)}
                required={i === 0}
                value={contact?.phoneNumber[i]}
              />
              {i === 0 ? (
                <IoMdAddCircle
                  size={28}
                  className="add-icon"
                  onClick={() =>
                    setAddPhoneField([
                      ...addPhoneField,
                      addPhoneField[addPhoneField.length - 1] + 1,
                    ])
                  }
                />
              ) : (
                <IoMdRemoveCircle
                  size={28}
                  className="remove-icon"
                  onClick={() =>
                    setAddPhoneField(
                      addPhoneField.filter((value) => val !== value)
                    )
                  }
                />
              )}
            </div>
          ))}

         
          {addEmailField.map((val, i) => (
            <div className="input-group" key={val}>
              <InputBox
                type="email"
                placeholder="Email"
                inputRef={(el) => (emailRef.current[val] = el)}
                required={i === 0}
                value={contact?.email[i]}
              />
              {i === 0 ? (
                <IoMdAddCircle
                  size={28}
                  className="add-icon"
                  onClick={() =>
                    setAddEmailField([
                      ...addEmailField,
                      addEmailField[addEmailField.length - 1] + 1,
                    ])
                  }
                />
              ) : (
                <IoMdRemoveCircle
                  size={28}
                  className="remove-icon"
                  onClick={() =>
                    setAddEmailField(
                      addEmailField.filter((value) => val !== value)
                    )
                  }
                />
              )}
            </div>
          ))}

          <div className="form-buttons">
            <button
              type="button"
              onClick={() => {
                setOpenContactModal(false);
                setContactIdToUpdate(null);
                setAddPhoneField([0]);
                setAddEmailField([0]);
              }}
              className="cancel-btn"
            >
              Cancel
            </button>
            <button type="submit" className="save-btn">
              Save
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
