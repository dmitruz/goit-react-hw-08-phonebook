import { useSelector } from 'react-redux';
import Navigation from  '../../components/Navigation/Navigation';

import AuthNav from '../../components/AuthNav/AuthNav'
import UserMenu from '../../components/UserMenu/UserMenu';
import { authSelectors } from '../../redux/auth';
import css from './AppBar.module.css';

export default function Appbar() {
    const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
    return (
        <div className={css.headerContainer}>
            <header className={css.header}>
            <Navigation />
            {isLoggedIn ? <UserMenu /> : <AuthNav />}
                </header>
        </div>
    );
}