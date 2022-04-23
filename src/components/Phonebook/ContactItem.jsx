import { useDispatch, useSelector } from 'react-redux';
import toast from 'react-hot-toast';
import { BsFillPersonFill, BsFillTelephoneFill } from 'react-icons/bs';

import { contactsOperations, contactsSelectors } from '../../redux/contacts';

import css from './phonebook-css/ContactList.module.css';

export default function ContactListItem({ id, name, number }) {
  const dispatch = useDispatch();
  const loading = useSelector(contactsSelectors.getDeletedContact);

  const onDeleteContact = id => dispatch(contactsOperations.deleteContact(id));

  return (
    <li key={id} className={css.item}>
      <div className={css.contact}>
        <BsFillPersonFill size={16} className={css.icon} />
        <span className={css.name}>{name}</span>
        <BsFillTelephoneFill size={11} className={css.icon} />
        <span>{number}</span>
      </div>
      <button
        className={css.btn}
        onClick={() => {
          onDeleteContact(id);
          toast.success(`Contact '${name}' deleted`);
        }}
        disabled={loading}
      >
        delete
      </button>
    </li>
  );
}