import { useState } from 'react';
import { Btn, Form, InputName, Label } from './ContactForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { addContact } from 'Redux/slice';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(state => state.contacts);
  const dispatch = useDispatch();

  const handleChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const onSubmit = e => {
    e.preventDefault();
    if (contacts.find(contact => contact.name === name)) {
      window.alert(`Contact ${name} is already in contacts`);
      return;
    }
    dispatch(addContact({ id: nanoid(), number, name }));
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <Form onSubmit={onSubmit}>
      <Label htmlFor="InputName">Name</Label>
      <InputName
        onChange={handleChange}
        value={name}
        type="text"
        name="name"
        id="InputName"
        pattern="^[a-zA-Zа-яА-Я-і]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
      <Label htmlFor="InputNumber">Number</Label>
      <InputName
        onChange={handleChange}
        value={number}
        id="InputNumber"
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
      <Btn type="submit">add contact</Btn>
    </Form>
  );
};
