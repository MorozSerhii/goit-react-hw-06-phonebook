import { useDispatch, useSelector } from 'react-redux';
import {
  List,
  NameContact,
  Span,
  Wrap,
  Icon,
  ListContact,
} from './ContactList.styled';
import { delContact } from 'Redux/slice';

export const ContactList = () => {
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filterContacts);
  const dithpatch = useDispatch();

  const filteredConacts = filter
    ? contacts.filter(({ name }) =>
        name.toLowerCase().includes(filter.toLowerCase())
      )
    : contacts;

  return (
    <ListContact>
      {filteredConacts.length === 0 && <p>no matches💩</p>}
      {filteredConacts.map(({ id, name, number }) => (
        <List
          key={id}
          animate={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.4 }}
        >
          <Wrap>
            <NameContact>{name}</NameContact>
            <Span>{number}</Span>
          </Wrap>

          <button type="button" onClick={() => dithpatch(delContact(id))}>
            <Icon
              viewBox="0 0 15 17.5"
              height="17.5"
              width="15"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                transform="translate(-2.5 -1.25)"
                d="M15,18.75H5A1.251,1.251,0,0,1,3.75,17.5V5H2.5V3.75h15V5H16.25V17.5A1.251,1.251,0,0,1,15,18.75ZM5,5V17.5H15V5Zm7.5,10H11.25V7.5H12.5V15ZM8.75,15H7.5V7.5H8.75V15ZM12.5,2.5h-5V1.25h5V2.5Z"
                id="Fill"
              ></path>
            </Icon>
          </button>
        </List>
      ))}
    </ListContact>
  );
};
