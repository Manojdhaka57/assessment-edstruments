import React from 'react';
import {
  HeaderContents,
  StyledHeaderTitleBlock,
  StyledHeaderUserBlock,
} from './Header.styled';
import { Logout } from '../Logout/Logout';
import { useAuth } from '../../providers/AuthProvider';

const Header = () => {
  const { user } = useAuth();
  return (
    <HeaderContents>
      <StyledHeaderTitleBlock>Edstruments</StyledHeaderTitleBlock>
      <StyledHeaderUserBlock>
        <h3>{user?.username}</h3>
        <Logout />
      </StyledHeaderUserBlock>
    </HeaderContents>
  );
};

export default Header;
