import { useDispatch, useSelector } from 'react-redux';
import { BsArrowBarRight } from 'react-icons/bs';
import { authSelectors, authOperations } from '../../redux/auth';
import css from './UserMenu.module.css';

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUserName);

  return (
    <div className={css.container}>
      <span className={css.userName}>{name}</span>

      <button
        className={css.button}
        type="button"
        onClick={() => dispatch(authOperations.logOut())}
      >
        <span className={css.span}>Exit</span>
        <BsArrowBarRight size={18} />
      </button>
    </div>
  );
}