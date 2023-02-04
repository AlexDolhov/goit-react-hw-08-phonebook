import { Link } from './AuthNav.styled';

const AuthNav = () => {
  return (
    <div>
      <Link to="/register">Register</Link>
      <Link to="/login">Login</Link>
    </div>
  );
};

export default AuthNav;
