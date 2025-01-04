import { createContext, useContext, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../utils';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem('isAuthenticated') === 'true' || false
  );
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem('user')) || {}
  );
  const login = async (credentials) => {
    setIsAuthenticated(true);
    setUser(credentials);
    localStorage.setItem('user', JSON.stringify(credentials));
    localStorage.setItem('isAuthenticated', true);
    navigate(ROUTES.VENDOR_DETAILS);
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUser({});
    localStorage.clear();
    navigate(ROUTES.LOGIN);
  };
  const value = useMemo(
    () => ({
      isAuthenticated,
      user,
      login,
      logout,
    }),
    [isAuthenticated, user]
  );
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
export const useAuth = () => {
  return useContext(AuthContext);
};
