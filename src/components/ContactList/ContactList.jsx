// import PropTypes from 'prop-types';
import { List, Item, Button } from './ContactList.styled';
import { useSelector, useDispatch } from 'react-redux';
import { selectVisibleContacts } from 'redux/contacts/selectors';
import { deleteContact } from 'redux/contacts/operations';

const ContactList = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(selectVisibleContacts);

  return (
    <List>
      {contacts.map(({ id, name, number }) => (
        <Item key={id}>
          {name}: {number}
          <Button
            type="submit"
            onClick={() => dispatch(deleteContact({ id, name }))}
          >
            Delete
          </Button>
        </Item>
      ))}
    </List>
  );
};

export default ContactList;
