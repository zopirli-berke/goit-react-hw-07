import scss from "./App.module.scss";
import ContactList from "../ContactList/ContactList";
import ContactsForm from "../ContactsForm/ContactsForm";
import SearchBox from "../SearchBox/SearchBox";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchContacts } from "../../redux-temp/contactsOps";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={scss.App}>
      <ContactsForm />
      <SearchBox />
      <ContactList />
    </div>
  );
}

export default App;
