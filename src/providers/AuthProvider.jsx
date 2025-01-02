import { createContext, useContext, useMemo, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem("isAuthenticated") === "true" || false
  );
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user")) || {}
  );
  const login = (credentials) => {
    setIsAuthenticated(true);
    setUser(credentials);
    localStorage.setItem("user", JSON.stringify(credentials));
    localStorage.setItem("isAuthenticated", true);
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUser({});
    localStorage.clear();
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
