import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { ContactText, Container, TitileContact } from './App.styled';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactsList/ContactList';
import { Filter } from './Filter/Filter';

const LS_KEY = 'contacts';

export const App = () => {
  const startContact = [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ];

  const [contacts, setContact] = useState(
    () => JSON.parse(localStorage.getItem(LS_KEY)) ?? startContact
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem(LS_KEY, JSON.stringify(contacts));
  }, [contacts]);

  const addContact = e => {
    setContact(prev => {
      return [...prev, { id: nanoid(), ...e }];
    });
  };

  const removeContact = id => {
    setContact(prevState => prevState.filter(contacto => contacto.id !== id));
  };
  const filterValue = e => {
    const { value } = e.target;
    setFilter(value.toLowerCase());
  };

  const filterContacts = contacts.filter(contacto =>
    contacto.name.toLowerCase().includes(filter)
  );
  return (
    <Container
      initial={{ scale: 0.9, opacity: 0.2, y: -600 }}
      animate={{ scale: 1, opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1>Phonebook</h1>
      <ContactForm contacts={contacts} addContact={addContact} />
      <TitileContact>Contacts</TitileContact>
      <Filter filter={filter} change={filterValue} />
      {filterContacts.length > 0 ? (
        <ContactList contacts={filterContacts} delContact={removeContact} />
      ) : (
        <ContactText>No contacts</ContactText>
      )}
    </Container>
  );
};
