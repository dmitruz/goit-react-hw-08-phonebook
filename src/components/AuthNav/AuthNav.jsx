import { NavLink } from 'react-router-dom';
import css from './AuthNav.module.css';

export default function AuthNav() {
 return (
    <div className={css.list}>
      <NavLink
        exact
        to="/register"
        className={css.link}
        activeClassName={css.active}
      >
        Registration
      </NavLink>

      <NavLink
        exact
        to="/login"
        className={css.link}
        activeClassName={css.active}
      >
        Login
      </NavLink>
    </div>
  );
}   
