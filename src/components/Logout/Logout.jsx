import React from 'react';
import { Button } from '../../styles/GlobalStyles';
import { useAuth } from '../../providers/AuthProvider';

export const Logout = () => {
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
  };

  return <Button onClick={handleLogout}>Logout</Button>;
};
