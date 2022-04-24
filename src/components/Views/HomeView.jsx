import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { FaRegAddressBook } from 'react-icons/fa';
import { authSelectors } from '../../redux/auth';
import css from './page-css/HomeView.module.css';


export default function HomeView() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const name = useSelector(authSelectors.getUserName);

  return (
    <div className={css.container}>
      <span className={css.span}>Welcome to service:</span>
      <h1 className={css.title}>Your PhoneBook</h1>
      <FaRegAddressBook size={250} className={css.icon} />

      {!isLoggedIn && (
        <p className={css.paragraph}>
          Please register or login to start using the application:
        </p>
      )}

      {isLoggedIn ? (
        <h3 className={css.description}>
          Hello, <span className={css.spanName}>{name}</span>!
          <NavLink to="/contacts" className={css.contacts}>
            Open your contacts
          </NavLink>
        </h3>
      ) : (
        <>
          <NavLink className={css.link} to="/register">
            Registration
          </NavLink>

          <NavLink className={css.link} to="/login">
            Login
          </NavLink>
        </>
      )}
    </div>
  );
}