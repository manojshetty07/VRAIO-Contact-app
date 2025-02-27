
import './App.css';
import AddContactButton from "./components/AddContactButton";
import ContactCardList from "./components/ContactCardList";
import { ContactDetailsModal } from "./components/modals/ContactDetailsModal";
import ContactDeleteModal from "./components/modals/ContactDeleteModal";
import ContactViewModal from "./components/modals/ContactViewModal";
import AppTitle from "./components/Apptitle";
import { ContactDataProvider } from "./Detailsprovider/ContactDataProvider";

function App() {
  return (
    <ContactDataProvider>
      <AppTitle />
      <div className="flex-center">
        <div className="w-fit">
          <AddContactButton />
          <ContactCardList />
          <ContactDetailsModal />
          <ContactDeleteModal />
          <ContactViewModal />
        </div>
      </div>
    </ContactDataProvider>
  );
}

export default App;
