import React from 'react';
import { StyledContent, StyledLayout } from './Layout.styled';
import Header from '../Header/Header';
import { useAuth } from '../../providers/AuthProvider';

const Layout = ({ children }) => {
  const { isAuthenticated } = useAuth();
  return (
    <StyledLayout>
      {isAuthenticated && <Header />}
      <StyledContent>{children}</StyledContent>
    </StyledLayout>
  );
};

export default Layout;
