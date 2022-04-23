import { useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BsFillPersonFill, BsFillTelephoneFill } from 'react-icons/bs';
import toast from 'react-hot-toast';
import shortid from 'shortid';

import { contactsSelectors, contactsOperations } from '../../redux/contacts';
import { LoaderSpinner } from '../Spinner/Spinner';

import css from './phonebook-css/ContactForm.module.css';

export default function ContactForm() {
  const dispatch = useDispatch();
  const contacts = useSelector(contactsSelectors.getAllContacts);
  const loading = useSelector(contactsSelectors.getIsAddedContact);

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const nameId = useRef(shortid.generate());
  const numberId = useRef(shortid.generate());

  const handleContactChange = e => {
    switch (e.target.name) {
      case 'name':
        setName(e.target.value);
        break;

      case 'number':
        setNumber(e.target.value);
        break;

      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (contacts.find(con => con.name.toLowerCase() === name.toLowerCase())) {
      toast(`Name '${name}' is alresdy in contacts`);

      return;
    }

    if (contacts.find(con => con.number === number)) {
      toast(`Number '${number}' is alresdy in contacts`);
      return;
    }

    dispatch(contactsOperations.addContact({ name, number }));
    toast.success(`Contact '${name}' is added`);

    setName('');
    setNumber('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className={css.form}>
        <label htmlFor={nameId.current} className={css.label}>
          <BsFillPersonFill size={16} className={css.icon} /> Name:
          <input
            className={css.name}
            type="text"
            name="name"
            placeholder="Enter name"
            value={name}
            id={nameId.current}
            onChange={handleContactChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
          />
        </label>

        <br />

        <label htmlFor={numberId.current} className={css.label}>
          <BsFillTelephoneFill size={12} className={css.icon} />
          Number:
          <input
            className={css.number}
            type="tel"
            name="number"
            placeholder="Enter number"
            value={number}
            id={numberId.current}
            onChange={handleContactChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
          />
        </label>

        <br />

        <button type="submit" className={css.btn} disabled={loading}>
          {/* add contact */}
          {loading ? <LoaderSpinner /> : 'add contact'}
        </button>
      </form>
    </div>
  );
}