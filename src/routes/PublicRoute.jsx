import React, { Fragment } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../providers/AuthProvider';

const PublicRoute = ({ children, isAuthCheck }) => {
  const { isAuthenticated } = useAuth();
  if (isAuthCheck && isAuthenticated) {
    return <Navigate to={'/vendor-details'} replace={true} />;
  }
  return <Fragment>{children ? children : <Outlet />}</Fragment>;
};

export default PublicRoute;
