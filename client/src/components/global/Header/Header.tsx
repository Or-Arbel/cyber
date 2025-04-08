import React from 'react';
import { Calendar, User } from 'lucide-react';
import { useAuth } from '../../../contexts/AuthContext';
import {
  HeaderContainer,
  LogoContainer,
  Logo,
  Title,
  UserSection,
  UserIcon,
  LoginButton
} from './styles';

const Header: React.FC = () => {
  const { isAuthenticated, user, login, logout } = useAuth();

  return (
    <HeaderContainer>
      <LogoContainer>
        <Logo>
          <Calendar className="text-white" />
        </Logo>
        <Title>Cyber Front Israel</Title>
      </LogoContainer>
      <UserSection>
        {isAuthenticated ? (
          <UserIcon onClick={logout} title="Click to logout">
            <User />
          </UserIcon>
        ) : (
          <LoginButton onClick={login}>
            Login
          </LoginButton>
        )}
      </UserSection>
    </HeaderContainer>
  );
};

export default Header;