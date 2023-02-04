// import { lazy, useEffect } from 'react';
import { lazy } from 'react';
// import { useDispatch } from 'react-redux';
import { Layout } from './Layout';
import { Route, Routes } from 'react-router-dom';
// import { RestrictedRoute } from './RestrictedRoute';
// import { PrivateRoute } from './PrivateRoute';
// import { useAuth } from 'hooks';
// import { refreshUser } from 'redux/auth/operations';

const HomePage = lazy(() => import('../pages/Home'));
const RegisterPage = lazy(() => import('../pages/Register'));
const LoginPage = lazy(() => import('../pages/Login'));
const ContactsPage = lazy(() => import('../pages/Contacts'));

export const App = () => {
  // const dispatch = useDispatch();
  // const { isRefreshing } = useAuth();

  // useEffect(() => {
  //   dispatch(refreshUser());
  // }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/contacts" element={<ContactsPage />} />
        <Route path="*" element={<p>No such page found</p>} />
      </Route>
    </Routes>
  );
};

// return (
//   <Container>
//     {/* <Layout /> */}
//     <SectionContainer>
//       <h1>Phonebook</h1>
//       <ContactForm />
//     </SectionContainer>
//     <SectionContainer>
//       <h2>Contacts</h2>
//       <Filter />
//       {isLoading && !error && <b>Request in progress...</b>}
//       <ContactList />
//     </SectionContainer>
//   </Container>
// );
