import { IoCloseSharp } from "react-icons/io5";
import useData from "../../Detailsprovider/ContactDataProvider";


export default function ContactViewModal() {
  const { setContactIdToView, contactIdToView, getContact } = useData();
  const [contact] = getContact(contactIdToView);
  const listStyle = "modal-list-item"; // Using a custom CSS class

  if (!contactIdToView) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-form">
        <div className="modal-close-btn">
          <IoCloseSharp
            color="red"
            size={24}
            onClick={() => setContactIdToView(null)}
          />
        </div>
        <div className={listStyle}>
          <span>Name: </span>
          <span>{`${contact.firstName} ${contact.lastName}`}</span>
        </div>
        {contact.nickName && (
          <div className={listStyle}>
            <span>Nick Name: </span>
            <span>{contact.nickName}</span>
          </div>
        )}
        {contact.dob && (
          <div className={listStyle}>
            <span>Date Of Birth: </span>
            <span>{contact.dob}</span>
          </div>
        )}
        <div className={listStyle}>
          <span>Phone Number: </span>
          <span>{contact.phoneNumber1}</span>
        </div>
        {contact.phoneNumber2 && (
          <div className={listStyle}>
            <span>Phone Number 2: </span>
            <span>{contact.phoneNumber2}</span>
          </div>
        )}
        <div className={listStyle}>
          <span>Email: </span>
          <span>{contact.email1}</span>
        </div>
        {contact.email2 && (
          <div className={listStyle}>
            <span>Email 2: </span>
            <span>{contact.email2}</span>
          </div>
        )}
      </div>
    </div>
  );
}
