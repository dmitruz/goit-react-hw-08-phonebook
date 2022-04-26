import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { lazy, Suspense } from 'react';
import { Switch } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

import AppBar from './components/AppBar/AppBar';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';
import { LoaderSpinner } from './components/Spinner/Spinner';
import { authOperations, authSelectors } from './redux/auth';

const HomeView = lazy(() => 
import('./components/Views/HomeView'),
);
const Phonebook = lazy(() =>
  import('./components/Phonebook/Phonebook'),
);

const LoginView = lazy(() =>
  import('./components/Views/LoginView'),
);

const RegisterView = lazy(() =>
  import('./components/Views/RegisterView'), 
  );


const NotFoundView = lazy(() =>
  import('./components/Views/NotFoundView' ),
);

export const App = () => {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(
    authSelectors.getIsFetchingCurrentUser,
  );

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

return (
    !isFetchingCurrentUser && (
      <>
        <AppBar />

        <Suspense fallback={<LoaderSpinner />}>
          <Switch>
            <PublicRoute exact path="/">
              <HomeView />
            </PublicRoute>

            <PrivateRoute exact path="/contacts" redirectTo="/login">
              <Phonebook />
            </PrivateRoute>

            <PublicRoute exact path="/register" restricted>
              <RegisterView />
            </PublicRoute>

            <PublicRoute exact path="/login" restricted redirectTo="/contacts">
              <LoginView />
            </PublicRoute>

            <PublicRoute>
              <NotFoundView />
            </PublicRoute>
          </Switch>
        </Suspense>

        <Toaster position="top-center" />
      </>
    )
  );
};