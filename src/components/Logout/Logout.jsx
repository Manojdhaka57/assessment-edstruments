import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../styles/GlobalStyles";
import { useAuth } from "../../providers/AuthProvider";

export const Logout = () => {
  const navigate = useNavigate();
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
  };

  return <Button onClick={handleLogout}>Logout</Button>;
};
