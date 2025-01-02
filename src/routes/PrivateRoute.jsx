import React, { Fragment } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../providers/AuthProvider";

const PrivateRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();
  if (!isAuthenticated) {
    return <Navigate to={"/login"} />;
  }
  return <Fragment>{children ? children : <Outlet />}</Fragment>;
};

export default PrivateRoute;
