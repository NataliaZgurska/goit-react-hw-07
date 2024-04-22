import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Layout } from './components/Layout/Layout';
import ContactList from './components/ContactList/ContactList';
import SearchBox from './components/SearchBox/SearchBox';
import ContactForm from './components/ContactForm/ContactForm';

import { selectError, selectIsLoading } from './redux/selectors';
import { fetchContacts } from './redux/contactsOps';

// import { selectError, selectIsLoading } from '../redux/selectors';

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Layout>
      <h2>Phonebook</h2>
      <ContactForm />
      {isLoading && !error && <b>Request in progress...</b>}
      <SearchBox />
      <ContactList />
    </Layout>
  );
};
