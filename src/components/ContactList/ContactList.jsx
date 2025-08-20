import { useSelector } from "react-redux";
import { selectFilteredContacts } from "../../redux/contactsSelectors";

import Contact from "../Contact/Contact";
import css from "./ContactList.module.scss";

export default function ContactList() {
  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <ul className={css.contactBox}>
      {filteredContacts.map((contact) => (
        <li className={css.contactList} key={contact.id}>
          <Contact contact={contact} />
        </li>
      ))}
    </ul>
  );
}
