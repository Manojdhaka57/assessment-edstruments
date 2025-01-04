import React from 'react';
import { HeaderContents } from './Header.styled';
import { Logout } from '../Logout/Logout';
import { useAuth } from '../../providers/AuthProvider';

const Header = () => {
  const { user } = useAuth();
  return (
    <HeaderContents>
      <h2>{user?.username}</h2>
      <Logout />
    </HeaderContents>
  );
};

export default Header;
