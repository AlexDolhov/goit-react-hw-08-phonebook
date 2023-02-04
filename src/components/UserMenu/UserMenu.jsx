import { useAuth } from 'hooks';
import { useDispatch } from 'react-redux';
import { logout } from 'redux/auth/operations';
import { Container } from './UserMenu.styled';

const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <Container>
      <p>Welcome, {user.name}</p>
      <button type="button" onClick={() => dispatch(logout())}>
        LogOut
      </button>
    </Container>
  );
};

export default UserMenu;
