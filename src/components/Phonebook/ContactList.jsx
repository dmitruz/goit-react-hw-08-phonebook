import { useSelector } from 'react-redux';
import { contactsSelectors } from '../../redux/contacts';
import ContactListItem from './ContactItem';

import css from './phonebook-css/ContactList.module.css';

export default function ContactList() {
  const contacts = useSelector(contactsSelectors.getVisibleContacts);

  contacts.sort((a, b) => a.name.localeCompare(b.name));

  return (
    <ul className={css.list}>
      {contacts.map(({ id, name, number }) => (
        <ContactListItem key={id} id={id} name={name} number={number} />
      ))}
    </ul>
  );
}