import { useDispatch, useSelector } from 'react-redux';
import { contactsSelectors, changeFilter } from '../../redux/contacts';
import css from './phonebook-css/Filter.module.css';

export default function Filter() {
  const dispatch = useDispatch();
  const value = useSelector(contactsSelectors.getFilter);

  return (
    <label>
      Find contacts by name
      <input
        className={css.inp}
        type="text"
        placeholder="Enter contact's name"
        value={value}
        onChange={e => dispatch(changeFilter(e.target.value))}
      />
    </label>
  );
}