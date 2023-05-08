import { ContactText, Container, TitileContact } from './App.styled';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactsList/ContactList';
import { Filter } from './Filter/Filter';
import { useSelector } from 'react-redux';

export const App = () => {
  const contact = useSelector(state => state.contacts);
  return (
    <Container
      initial={{ scale: 0.9, opacity: 0.2, y: -600 }}
      animate={{ scale: 1, opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1>Phonebook</h1>
      <ContactForm />
      <TitileContact>Contacts</TitileContact>
      <Filter />
      {contact.length > 0 ? (
        <ContactList />
      ) : (
        <ContactText>No contacts</ContactText>
      )}
    </Container>
  );
};
