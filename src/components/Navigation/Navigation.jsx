import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { authSelectors } from '../../redux/auth';
import css from './Navigation.module.css';

export default function Navigation() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

return (
    <div className={css.list}>
      <NavLink exact to="/" className={css.link} activeClassName={css.active}>
        Home
      </NavLink>

      {isLoggedIn && (
        <NavLink
          to="/contacts"
          className={css.link}
          activeClassName={css.active}
        >
          PhoneBook
        </NavLink>
      )}
    </div>
  );
      }