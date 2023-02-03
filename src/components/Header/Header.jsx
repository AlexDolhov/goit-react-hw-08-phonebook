import { Navigation } from 'components/Navigation/Navigation';
import { useAuth } from 'hooks';

export const Header = () => {
  const { isLoggedIn } = useAuth();
  return (
    <header>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
};
