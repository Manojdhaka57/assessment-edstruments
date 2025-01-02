import React, { Fragment } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../providers/AuthProvider";

const PublicRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();
  console.log("@test isAuthenticated public", isAuthenticated);
  if (isAuthenticated) {
    return <Navigate to={"/main"} replace />;
  }
  console.log("after isAuthenticated public");
  return <Fragment>{children ? children : <Outlet />}</Fragment>;
};

export default PublicRoute;
