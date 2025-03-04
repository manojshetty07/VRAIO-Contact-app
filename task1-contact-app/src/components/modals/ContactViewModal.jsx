import { IoCloseSharp } from "react-icons/io5";
import useData from "../../Detailsprovider/ContactDataProvider";


export default function ContactViewModal() {
  const { setContactIdToView, contactIdToView, getContact } = useData();
  const [contact] = getContact(contactIdToView);
  const listStyle = "modal-list-item"; 

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
          <span>Phone Number:- </span>
          <div className="flex-col">
            {contact.phoneNumber.map((ph, i) => (
              <span key={i}>{ph}</span>
            ))}
          </div>
        </div>
        <div className={listStyle}>
          <span>Email:- </span>
          <div className="flex-col">
            {contact.email.map((em, i) => (
              <span key={i}>{em}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
