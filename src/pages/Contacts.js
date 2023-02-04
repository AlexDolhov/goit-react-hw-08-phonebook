import ContactForm from 'components/ContactForm';
import ContactList from 'components/ContactList';
import { useEffect } from 'react';
// import { Helmet } from 'react-helmet';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/contacts/operations';
import { selectIsLoading } from 'redux/contacts/selectors';

export default function Tasks() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      {/* <Helmet> */}
      <title>Your contacts</title>
      {/* </Helmet> */}
      <ContactForm />
      <div>{isLoading && 'Request in progress...'}</div>
      <ContactList />
    </>
  );
}
