const { createSlice } = require('@reduxjs/toolkit');

const initialState = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact: (state, action) => [...state, action.payload],

    delContact: (state, action) =>
      state.filter(contact => contact.id !== action.payload),
  },
});

export const { addContact, delContact } = contactsSlice.actions;
export const contactReduser = contactsSlice.reducer;

const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    getFilter: (state, action) => (state = action.payload),
  },
});

export const { getFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
