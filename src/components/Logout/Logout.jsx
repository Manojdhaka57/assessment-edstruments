import React from 'react';
import { Button } from '../../styles/GlobalStyles';
import { useAuth } from '../../providers/AuthProvider';
import styled from 'styled-components';
import { TbLogout } from 'react-icons/tb';

const StyledLogoutIcon = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  & svg {
    height: 28px;
    width: 28px;
  }
  &:hover {
    cursor: pointer;
    color: orange;
  }
`;
export const Logout = () => {
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
  };

  return (
    <StyledLogoutIcon onClick={handleLogout} title='logout'>
      <TbLogout />
    </StyledLogoutIcon>
  );
};
