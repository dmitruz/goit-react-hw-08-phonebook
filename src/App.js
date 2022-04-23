import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { lazy, Suspense } from 'react';
import { Routes } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

import AppBar from './components/AppBar/AppBar';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';
import { LoaderSpinner } from './components/Spinner/Spinner';
import { authOperations, authSelectors } from './redux/auth';

const HomeView = lazy(() => 
import('Components/Views/HomeView.jsx'),
);
const Phonebook = lazy(() =>
  import('Components/Phonebook/Phonebook'),
);

const LoginView = lazy(() =>
  import('Components/Views/LoginView.jsx'),
);

const RegisterView = lazy(() =>
  import(
    'Components/Views/RegisterView.jsx'), 
  );


const NotFoundView = lazy(() =>
  import(
    'Components/Views/NotFoundView.jsx' 
  ),
);

export const App = () => {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(
    authSelectors.getIsFetchingCurrentUser,
  );

  useEffect(() => {
    dispatch(authOperations.fetchCurrentuser());
  }, [dispatch]);


return (
    !isFetchingCurrentUser && (
      <>
        <AppBar />

        <Suspense fallback={<LoaderSpinner />}>
          <Routes>
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
          </Routes>
        </Suspense>

        <Toaster position="top-center" />
      </>
    )
  );
}